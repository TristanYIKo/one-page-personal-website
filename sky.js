/* =========================================================================
   Sun and moon
   -------------------------------------------------------------------------
   By day the sun sits where it really is in the visitor's sky: the solar
   position is computed from their local time and an approximate location
   taken from their time zone (no permission prompt). It rises and sets from
   behind the mountains.

   By night the moon crosses the sky from sunset to sunrise, peaking around
   the middle of the night, and is drawn in tonight's real phase.

   Preview any time with ?time=21:30 (today) or ?time=2026-06-21T13:00.
   Solar and lunar formulas follow SunCalc (Vladimir Agafonkin, BSD-2).
   ========================================================================= */

(() => {
  "use strict";

  const sky = document.querySelector(".sky");
  if (!sky) return;

  /* ---------- where is the visitor, roughly? ---------- */

  // Major time zones -> [latitude, longitude]. Anything else falls back to an
  // estimate from the UTC offset, which is good to about half an hour.
  const ZONES = {
    "America/Toronto": [43.65, -79.38], "America/New_York": [40.71, -74.01],
    "America/Detroit": [42.33, -83.05], "America/Chicago": [41.88, -87.63],
    "America/Winnipeg": [49.9, -97.14], "America/Regina": [50.45, -104.61],
    "America/Denver": [39.74, -104.99], "America/Edmonton": [53.55, -113.49],
    "America/Phoenix": [33.45, -112.07], "America/Los_Angeles": [34.05, -118.24],
    "America/Vancouver": [49.28, -123.12], "America/Halifax": [44.65, -63.57],
    "America/St_Johns": [47.56, -52.71], "America/Anchorage": [61.22, -149.9],
    "Pacific/Honolulu": [21.31, -157.86], "America/Mexico_City": [19.43, -99.13],
    "America/Bogota": [4.71, -74.07], "America/Lima": [-12.05, -77.04],
    "America/Sao_Paulo": [-23.55, -46.63], "America/Argentina/Buenos_Aires": [-34.6, -58.38],
    "America/Santiago": [-33.45, -70.67],
    "Europe/London": [51.51, -0.13], "Europe/Dublin": [53.35, -6.26],
    "Europe/Lisbon": [38.72, -9.14], "Europe/Madrid": [40.42, -3.7],
    "Europe/Paris": [48.86, 2.35], "Europe/Brussels": [50.85, 4.35],
    "Europe/Amsterdam": [52.37, 4.9], "Europe/Berlin": [52.52, 13.4],
    "Europe/Zurich": [47.37, 8.54], "Europe/Rome": [41.9, 12.5],
    "Europe/Vienna": [48.21, 16.37], "Europe/Prague": [50.08, 14.44],
    "Europe/Warsaw": [52.23, 21.01], "Europe/Copenhagen": [55.68, 12.57],
    "Europe/Oslo": [59.91, 10.75], "Europe/Stockholm": [59.33, 18.07],
    "Europe/Helsinki": [60.17, 24.94], "Europe/Athens": [37.98, 23.73],
    "Europe/Istanbul": [41.01, 28.98], "Europe/Moscow": [55.76, 37.62],
    "Africa/Cairo": [30.04, 31.24], "Africa/Lagos": [6.52, 3.38],
    "Africa/Nairobi": [-1.29, 36.82], "Africa/Johannesburg": [-26.2, 28.05],
    "Asia/Dubai": [25.2, 55.27], "Asia/Karachi": [24.86, 67.01],
    "Asia/Kolkata": [28.61, 77.21], "Asia/Calcutta": [28.61, 77.21],
    "Asia/Dhaka": [23.81, 90.41], "Asia/Bangkok": [13.76, 100.5],
    "Asia/Jakarta": [-6.21, 106.85], "Asia/Singapore": [1.35, 103.82],
    "Asia/Kuala_Lumpur": [3.14, 101.69], "Asia/Ho_Chi_Minh": [10.82, 106.63],
    "Asia/Manila": [14.6, 120.98], "Asia/Hong_Kong": [22.32, 114.17],
    "Asia/Shanghai": [31.23, 121.47], "Asia/Taipei": [25.03, 121.57],
    "Asia/Seoul": [37.57, 126.98], "Asia/Tokyo": [35.68, 139.69],
    "Australia/Perth": [-31.95, 115.86], "Australia/Adelaide": [-34.93, 138.6],
    "Australia/Brisbane": [-27.47, 153.03], "Australia/Sydney": [-33.87, 151.21],
    "Australia/Melbourne": [-37.81, 144.96], "Pacific/Auckland": [-36.85, 174.76],
  };

  function visitorLocation() {
    let zone = "";
    try { zone = Intl.DateTimeFormat().resolvedOptions().timeZone || ""; } catch (_) { /* old browser */ }
    if (ZONES[zone]) return ZONES[zone];

    // Fallback: standard (non-daylight) UTC offset gives longitude; when
    // daylight time happens in January, the visitor is south of the equator.
    const year = new Date().getFullYear();
    const jan = new Date(year, 0, 1).getTimezoneOffset();
    const jul = new Date(year, 6, 1).getTimezoneOffset();
    const lon = -Math.max(jan, jul) / 4; // minutes -> degrees (15 deg per hour)
    const lat = jan < jul ? -33 : jan > jul ? 42 : 20;
    return [lat, lon];
  }

  /* ---------- solar and lunar math (after SunCalc) ---------- */

  const PI = Math.PI;
  const rad = PI / 180;
  const dayMs = 864e5;
  const J1970 = 2440588;
  const J2000 = 2451545;
  const e = rad * 23.4397; // obliquity of the ecliptic

  const toDays = (date) => date.valueOf() / dayMs - 0.5 + J1970 - J2000;
  const fromJulian = (j) => new Date((j + 0.5 - J1970) * dayMs);

  const rightAscension = (l, b) => Math.atan2(Math.sin(l) * Math.cos(e) - Math.tan(b) * Math.sin(e), Math.cos(l));
  const declination = (l, b) => Math.asin(Math.sin(b) * Math.cos(e) + Math.cos(b) * Math.sin(e) * Math.sin(l));
  const azimuthOf = (H, phi, dec) => Math.atan2(Math.sin(H), Math.cos(H) * Math.sin(phi) - Math.tan(dec) * Math.cos(phi));
  const altitudeOf = (H, phi, dec) => Math.asin(Math.sin(phi) * Math.sin(dec) + Math.cos(phi) * Math.cos(dec) * Math.cos(H));
  const siderealTime = (d, lw) => rad * (280.16 + 360.9856235 * d) - lw;

  const solarMeanAnomaly = (d) => rad * (357.5291 + 0.98560028 * d);
  const eclipticLongitude = (M) =>
    M + rad * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M)) + rad * 102.9372 + PI;

  function sunCoords(d) {
    const L = eclipticLongitude(solarMeanAnomaly(d));
    return { dec: declination(L, 0), ra: rightAscension(L, 0) };
  }

  // azimuth: radians from south, positive toward west. altitude: radians above the horizon.
  function sunPosition(date, lat, lon) {
    const lw = rad * -lon, phi = rad * lat, d = toDays(date);
    const c = sunCoords(d);
    const H = siderealTime(d, lw) - c.ra;
    return { azimuth: azimuthOf(H, phi, c.dec), altitude: altitudeOf(H, phi, c.dec) };
  }

  // Sunrise and sunset for the solar day nearest `date`. Null in polar day or night.
  function sunTimes(date, lat, lon) {
    const J0 = 0.0009;
    const lw = rad * -lon, phi = rad * lat, d = toDays(date);
    const n = Math.round(d - J0 - lw / (2 * PI));
    const approxTransit = (Ht) => J0 + (Ht + lw) / (2 * PI) + n;
    const ds = approxTransit(0);
    const M = solarMeanAnomaly(ds);
    const L = eclipticLongitude(M);
    const dec = declination(L, 0);
    const transit = (a) => J2000 + a + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);
    const Jnoon = transit(ds);
    const w = Math.acos((Math.sin(rad * -0.833) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec)));
    if (Number.isNaN(w)) return null;
    const Jset = transit(approxTransit(w));
    return { rise: fromJulian(Jnoon - (Jset - Jnoon)), set: fromJulian(Jset) };
  }

  function moonCoords(d) {
    const L = rad * (218.316 + 13.176396 * d);
    const M = rad * (134.963 + 13.064993 * d);
    const F = rad * (93.272 + 13.22935 * d);
    const l = L + rad * 6.289 * Math.sin(M);
    const b = rad * 5.128 * Math.sin(F);
    return { ra: rightAscension(l, b), dec: declination(l, b), dist: 385001 - 20905 * Math.cos(M) };
  }

  // phase: 0 new, 0.25 first quarter, 0.5 full, 0.75 last quarter.
  function moonPhase(date) {
    const d = toDays(date);
    const s = sunCoords(d), m = moonCoords(d), sdist = 149598000;
    const phi = Math.acos(Math.sin(s.dec) * Math.sin(m.dec) + Math.cos(s.dec) * Math.cos(m.dec) * Math.cos(s.ra - m.ra));
    const inc = Math.atan2(sdist * Math.sin(phi), m.dist - sdist * Math.cos(phi));
    const angle = Math.atan2(
      Math.cos(s.dec) * Math.sin(s.ra - m.ra),
      Math.sin(s.dec) * Math.cos(m.dec) - Math.cos(s.dec) * Math.sin(m.dec) * Math.cos(s.ra - m.ra));
    return 0.5 + (0.5 * inc * (angle < 0 ? -1 : 1)) / PI;
  }

  /* ---------- drawing ---------- */

  const SUN_SVG =
    '<svg viewBox="-20 -20 140 140" focusable="false">' +
    '<defs><radialGradient id="sun-fill" cx="42%" cy="40%" r="62%">' +
    '<stop offset="0" stop-color="#D4614B"/><stop offset="1" stop-color="#B8322A"/></radialGradient>' +
    '<radialGradient id="sun-glow"><stop offset="0.55" stop-color="#C8503C" stop-opacity="0.22"/>' +
    '<stop offset="1" stop-color="#C8503C" stop-opacity="0"/></radialGradient></defs>' +
    '<circle cx="50" cy="50" r="70" fill="url(#sun-glow)"/>' +
    '<circle cx="50" cy="50" r="50" fill="url(#sun-fill)"/></svg>';

  // Lit part of the disc for a given phase. Waxing is lit on the right in the
  // northern hemisphere and on the left in the southern.
  function moonSVG(phase, southern) {
    const k = Math.cos(2 * PI * phase);           // 1 at new moon, -1 at full
    const rx = (Math.abs(k) * 50).toFixed(2);     // width of the terminator ellipse
    const sweep = k > 0 ? 0 : 1;                  // crescent bulges out, gibbous bulges in
    const mirrored = (phase < 0.5) === southern;
    const lit = `M50 0 A50 50 0 0 1 50 100 A${rx} 50 0 0 ${sweep} 50 0 Z`;
    return '<svg viewBox="-20 -20 140 140" focusable="false">' +
      '<defs><radialGradient id="moon-glow"><stop offset="0.6" stop-color="#FFFDF8" stop-opacity="0.9"/>' +
      '<stop offset="1" stop-color="#FFFDF8" stop-opacity="0"/></radialGradient></defs>' +
      '<circle cx="50" cy="50" r="68" fill="url(#moon-glow)"/>' +
      '<circle cx="50" cy="50" r="50" class="moon-dark"/>' +
      `<path d="${lit}" class="moon-lit"${mirrored ? ' transform="translate(100 0) scale(-1 1)"' : ""}/>` +
      '<circle cx="50" cy="50" r="50" class="moon-rim"/></svg>';
  }

  /* ---------- placing it ---------- */

  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  function previewTime() {
    const t = new URLSearchParams(location.search).get("time");
    if (!t) return null;
    if (/^\d{1,2}:\d{2}$/.test(t)) {
      const [hh, mm] = t.split(":").map(Number);
      const d = new Date();
      d.setHours(hh, mm, 0, 0);
      return d;
    }
    const d = new Date(t);
    return Number.isNaN(d.valueOf()) ? null : d;
  }

  // Compass bearing (radians, 0 = north, clockwise) -> horizontal position in %.
  // Northern visitors face south (east on the left); southern visitors face north.
  function bearingToX(bearing, southern) {
    let off = southern ? bearing : bearing - PI;   // angle from the direction faced
    if (off > PI) off -= 2 * PI;
    if (off < -PI) off += 2 * PI;
    return clamp(50 + (off / (PI / 2)) * 42, 4, 96);
  }

  const [lat, lon] = visitorLocation();
  const southern = lat < 0;
  let shown = "";

  function update() {
    const now = previewTime() || new Date();
    const sun = sunPosition(now, lat, lon);
    const isDay = sun.altitude > rad * -0.833;
    let x, alt, label;

    if (isDay) {
      x = bearingToX(sun.azimuth + PI, southern);
      alt = clamp(sun.altitude / (PI / 2), 0, 1);
      label = "sun";
    } else {
      // How far through tonight are we? Sunset -> sunrise.
      const noon = new Date(now); noon.setHours(12, 0, 0, 0);
      const today = sunTimes(noon, lat, lon);
      let p = 0.5;
      if (today) {
        const afterSunset = now > today.set;
        const yesterday = sunTimes(new Date(+noon - dayMs), lat, lon) || today;
        const tomorrow = sunTimes(new Date(+noon + dayMs), lat, lon) || today;
        const prevSet = afterSunset ? today.set : yesterday.set;
        const nextRise = afterSunset ? tomorrow.rise : today.rise;
        p = clamp((now - prevSet) / (nextRise - prevSet), 0, 1);
      }
      // the moon follows the same east-to-west path, cresting mid-night
      x = clamp(southern ? 92 - p * 84 : 8 + p * 84, 4, 96);
      alt = Math.sin(PI * p) * 0.55;
      label = "moon";
    }

    sky.style.setProperty("--x", x.toFixed(2));
    sky.style.setProperty("--alt", alt.toFixed(3));

    const key = label === "moon" ? `moon-${moonPhase(now).toFixed(2)}` : "sun";
    if (key !== shown) {
      sky.innerHTML = label === "sun" ? SUN_SVG : moonSVG(moonPhase(now), southern);
      sky.dataset.body = label;
      shown = key;
    }
  }

  /* ---------- keep the text readable ----------
     The position stays true, so sometimes it lands behind the content. When it
     does, it fades to a soft wash instead of moving. */

  function checkOverlap() {
    const view = document.querySelector(".view:not([hidden])");
    if (!view) return;
    const a = sky.getBoundingClientRect();
    const b = view.getBoundingClientRect();
    const pad = 10;
    const behind = a.right > b.left - pad && a.left < b.right + pad &&
                   a.bottom > b.top - pad && a.top < b.bottom + pad;
    sky.classList.toggle("is-behind", behind);
  }

  let overlapTimers = [];
  function scheduleOverlap() {
    overlapTimers.forEach(clearTimeout);
    // once now, and again after the view swap and the horizon's sink have settled
    overlapTimers = [60, 450, 1000, 2600].map((ms) => setTimeout(checkOverlap, ms));
  }

  update();
  scheduleOverlap();
  setInterval(() => { update(); checkOverlap(); }, 60 * 1000);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) { update(); checkOverlap(); } });
  window.addEventListener("resize", scheduleOverlap);
  new MutationObserver(scheduleOverlap).observe(document.body, { attributes: true, attributeFilter: ["data-view", "class"] });
})();
