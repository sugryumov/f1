import { ISvgIcon } from '@/models/ISvgIcon';

const Denmark = ({ width, height }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width={width}
    height={height}
  >
    <path fill="#c8102e" d="M0 0h640.1v480H0z" />
    <path fill="#fff" d="M205.7 0h68.6v480h-68.6z" />
    <path fill="#fff" d="M0 205.7h640.1v68.6H0z" />
  </svg>
);

export default Denmark;
