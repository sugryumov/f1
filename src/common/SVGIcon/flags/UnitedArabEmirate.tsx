import { ISvgIcon } from '@/models/ISvgIcon';

const UnitedArabEmirate = ({ width, height }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 480"
    width={width}
    height={height}
  >
    <path fill="#00732f" d="M0 0h640v160H0z" />
    <path fill="#fff" d="M0 160h640v160H0z" />
    <path d="M0 320h640v160H0z" />
    <path fill="red" d="M0 0h220v480H0z" />
  </svg>
);

export default UnitedArabEmirate;
