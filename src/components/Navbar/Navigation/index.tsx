import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { privateRoutes } from '@/components/AppRouter/routes';
import './index.css';

interface PropsNavigation {
  isMobile?: boolean;
}

export const Navigation: FC<PropsNavigation> = ({ isMobile = false }) => {
  const renderMenuItems: JSX.Element[] = privateRoutes.map(({ path }) => (
    <Menu.Item key={path} className="navigation__item">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive ? 'navigation__active' : 'navigation__link'
        }
      >
        {path.charAt(0).toUpperCase() + path.slice(1)}
      </NavLink>
    </Menu.Item>
  ));

  return (
    <Menu
      theme="dark"
      mode={isMobile ? 'vertical' : 'horizontal'}
      selectable={false}
      className={isMobile ? 'navigation-mobile' : 'navigation'}
    >
      {renderMenuItems}
    </Menu>
  );
};
