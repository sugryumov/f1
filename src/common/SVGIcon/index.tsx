import { circuits, nationality, other } from '@/enums/svgIcons';
import { ISvgIcon } from '@/models/ISvgIcon';
import { LogoF1 } from './other';
import {
  Australia,
  Austria,
  Azerbaijan,
  Bahrain,
  Belgium,
  Brazil,
  Canada,
  China,
  Denmark,
  Finland,
  France,
  Germany,
  Hungary,
  Italy,
  Japan,
  Mexico,
  Monaco,
  Netherlands,
  SaudiArabia,
  Singapore,
  Spanish,
  Thailand,
  UnitedArabEmirate,
  UnitedKingdom,
  Unknown,
  USA,
} from './flags';

const getPath = (name: string, props: ISvgIcon) => {
  switch (name) {
    case other.Logo:
      return <LogoF1 {...props} />;

    case nationality.Australian:
    case circuits.AlbertPark:
      return <Australia {...props} />;

    case circuits.RedBullRing:
      return <Austria {...props} />;

    case circuits.Baku:
      return <Azerbaijan {...props} />;

    case circuits.Bahrain:
      return <Bahrain {...props} />;

    case circuits.Spa:
      return <Belgium {...props} />;

    case circuits.Interlagos:
      return <Brazil {...props} />;

    case nationality.Canadian:
    case circuits.Villeneuve:
      return <Canada {...props} />;

    case nationality.Chinese:
      return <China {...props} />;

    case nationality.Danish:
      return <Denmark {...props} />;

    case nationality.Finnish:
      return <Finland {...props} />;

    case nationality.French:
    case circuits.Ricard:
      return <France {...props} />;

    case nationality.German:
      return <Germany {...props} />;

    case circuits.Hungaroring:
      return <Hungary {...props} />;

    case circuits.Imola:
    case circuits.Monza:
      return <Italy {...props} />;

    case nationality.Japanese:
    case circuits.Suzuka:
      return <Japan {...props} />;

    case nationality.Mexican:
    case circuits.Rodriguez:
      return <Mexico {...props} />;

    case nationality.Monegasque:
    case circuits.Monaco:
      return <Monaco {...props} />;

    case nationality.Dutch:
    case circuits.Zandvoort:
      return <Netherlands {...props} />;

    case circuits.Jeddah:
      return <SaudiArabia {...props} />;

    case circuits.MarinaBay:
      return <Singapore {...props} />;

    case nationality.Spanish:
    case circuits.Catalunya:
      return <Spanish {...props} />;

    case nationality.Thai:
      return <Thailand {...props} />;

    case circuits.YasMarina:
      return <UnitedArabEmirate {...props} />;

    case nationality.British:
    case circuits.Silverstone:
      return <UnitedKingdom {...props} />;

    case circuits.Miami:
    case circuits.Americas:
      return <USA {...props} />;

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
