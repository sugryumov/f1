import { ISvgIcon } from '@/models/ISvgIcon';

const Belgium = ({ width, height }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width={width}
    height={height}
  >
    <g fillRule="evenodd" strokeWidth="1pt">
      <path d="M0 0h213.3v480H0z" />
      <path fill="#ffd90c" d="M213.3 0h213.4v480H213.3z" />
      <path fill="#f31830" d="M426.7 0H640v480H426.7z" />
    </g>
  </svg>
);

export default Belgium;
