const SvgGradientBox = () => (
  <svg width="200" height="100" viewBox="0 0 200 100">
    <defs>
      <linearGradient id="SVGID_5_" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF0000" />
        <stop offset="100%" stopColor="#0000FF" />
      </linearGradient>
    </defs>
    <rect width="200" height="100" fill="url(#SVGID_5_)" />
  </svg>
);
export default SvgGradientBox