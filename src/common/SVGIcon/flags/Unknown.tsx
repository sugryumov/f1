import { ISvgIcon } from '@/models/ISvgIcon';

const Unknown = ({ width, height }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width={width}
    height={height}
  >
    <path
      d="M.5.5h638.9v478.9H.5z"
      style={{
        fill: '#fff',
        fillOpacity: 1,
        fillRule: 'evenodd',
        stroke: '#adb5bd',
        strokeWidth: 1.0804,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m.5.5 639 479M639.5.5l-639 479"
      style={{
        fill: 'none',
        stroke: '#adb5bd',
        strokeWidth: '1.0804px',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeOpacity: 1,
      }}
    />
  </svg>
);

export default Unknown;
