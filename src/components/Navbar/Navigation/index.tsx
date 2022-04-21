import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { useActions } from '@/hooks/useActions';
import { privateRoutes } from '@/components/AppRouter/routes';
import './index.css';

interface PropsNavigation {
  isMobile?: boolean;
}

export const Navigation: FC<PropsNavigation> = ({ isMobile = false }) => {
  const { setIsMobileMenuVisible } = useActions();

  const handlerOnClick = () => {
    if (isMobile) {
      setIsMobileMenuVisible(false);
    }
  };

  const renderMenuItems: JSX.Element[] = privateRoutes.map(({ path, name }) => (
    <Menu.Item key={path} className="navigation__item">
      <NavLink
        to={path}
        onClick={handlerOnClick}
        className={({ isActive }) =>
          isActive ? 'navigation__active' : 'navigation__link'
        }
      >
        {name}
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
