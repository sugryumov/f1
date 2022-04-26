import { ISvgIcon } from '@/models/ISvgIcon';

const Austria = ({ width, height }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width={width}
    height={height}
  >
    <g fillRule="evenodd">
      <path fill="#fff" d="M640 480H0V0h640z" />
      <path fill="#c8102e" d="M640 480H0V320h640zm0-319.9H0V.1h640z" />
    </g>
  </svg>
);

export default Austria;
