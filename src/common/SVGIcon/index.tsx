import { nationality } from '@/enums/nationality';
import { ISvgIcon } from '@/models/ISvgIcon';
import { Australia, Monegasque, Unknown } from './flags';

export { LogoF1 } from './LogoF1';

const getPath = (name: string, props: ISvgIcon) => {
  switch (name) {
    case nationality.Monegasque:
      return <Monegasque {...props} />;

    case nationality.Australian:
      return <Australia {...props} />;

    default:
      return <Unknown {...props} />;
  }
};

const SVGIcon = ({ name = '', width = '100%', height = '100%' }: ISvgIcon) =>
  getPath(name, { width, height });

export default SVGIcon;
