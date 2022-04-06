import { nationality } from '@/enums/nationality';
import { ISvgIcon } from '@/models/ISvgIcon';
import {
  Australia,
  Canada,
  China,
  Denmark,
  Finland,
  France,
  Germany,
  Japan,
  Mexico,
  Monaco,
  Netherlands,
  Spanish,
  Thailand,
  UnitedKingdom,
  Unknown,
} from './flags';

export { LogoF1 } from './LogoF1';

const getPath = (name: string, props: ISvgIcon) => {
  switch (name) {
    case nationality.Australian:
      return <Australia {...props} />;

    case nationality.Canadian:
      return <Canada {...props} />;

    case nationality.Chinese:
      return <China {...props} />;

    case nationality.Danish:
      return <Denmark {...props} />;

    case nationality.Finnish:
      return <Finland {...props} />;

    case nationality.French:
      return <France {...props} />;

    case nationality.German:
      return <Germany {...props} />;

    case nationality.Japanese:
      return <Japan {...props} />;

    case nationality.Mexican:
      return <Mexico {...props} />;

    case nationality.Monegasque:
      return <Monaco {...props} />;

    case nationality.Dutch:
      return <Netherlands {...props} />;

    case nationality.Spanish:
      return <Spanish {...props} />;

    case nationality.Thai:
      return <Thailand {...props} />;

    case nationality.British:
      return <UnitedKingdom {...props} />;

    default:
      return <Unknown {...props} />;
  }
};

const SVGIcon = ({ name = '', width = '100%', height = '100%' }: ISvgIcon) =>
  getPath(name, { width, height });

export default SVGIcon;
