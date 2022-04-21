import { ISvgIcon } from '@/models/ISvgIcon';

const Monaco = ({ width, height }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width={width}
    height={height}
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#f31830" d="M0 0h640v240H0z" />
      <path fill="#fff" d="M0 240h640v240H0z" />
    </g>
  </svg>
);

export default Monaco;
