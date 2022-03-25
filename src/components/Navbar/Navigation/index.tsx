import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import './index.css';

export const Navigation: FC = () => (
  <Menu
    theme="dark"
    mode="horizontal"
    selectable={false}
    className="navigation"
  >
    <Menu.Item key="home" className="navigation__item">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'navigation__active' : 'navigation__link'
        }
      >
        Home
      </NavLink>
    </Menu.Item>
    <Menu.Item key="drivers" className="navigation__item">
      <NavLink
        to="drivers"
        className={({ isActive }) =>
          isActive ? 'navigation__active' : 'navigation__link'
        }
      >
        Drivers
      </NavLink>
    </Menu.Item>
    <Menu.Item key="standings" className="navigation__item">
      <NavLink
        to="standings"
        className={({ isActive }) =>
          isActive ? 'navigation__active' : 'navigation__link'
        }
      >
        Standings
      </NavLink>
    </Menu.Item>
  </Menu>
);
