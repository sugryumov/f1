import { nationality, other } from '@/enums/svgIcons';
import { ISvgIcon } from '@/models/ISvgIcon';
import { LogoF1 } from './other';
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

const getPath = (name: string, props: ISvgIcon) => {
  switch (name) {
    case other.Logo:
      return <LogoF1 {...props} />;

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

const SVGIcon = ({
  name = '',
  width = '100%',
  height = '100%',
  fill,
}: ISvgIcon) => getPath(name, { width, height, fill });

export default SVGIcon;
