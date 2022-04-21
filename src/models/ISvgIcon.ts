export interface ISvgIcon {
  name?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  fill?: string;
}

export interface ISvgProps {
  fill?: string | any;
  width?: string | number;
  height?: string | number;
  stroke?: string;
  strokeChildren?: string;
}
