import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { House, Style, CardTravel, AmpStories } from "@material-ui/icons";

import "./style.scss";

const menuItems = [
  {
    title: 'Marketplace',
    link: '/marketplace',
    icon: <House />,
  },
  {
    title: 'My Products',
    link: '/products',
    icon: <Style />,
  },
  {
    title: 'My Orders',
    link: '/orders',
    icon: <CardTravel />,
  },
  {
    title: 'Disputes',
    link: '/disputes',
    icon: <AmpStories />,
  }
];

const Sidebar = ({ title, open }) => {

  return (
    <div className={`app-sidebar ${open ? 'opened' : 'closed'}`}>
      <div className="logo">
        <span>{title}</span>
      </div>
      <div className="nav">
        {
          menuItems.map((menuItem, index) => (
            <NavLink
              className="nav-link"
              to={menuItem.link}
              activeClassName="active"
              key={index}
            >
              {menuItem.icon}
              <span>{menuItem.title}</span>
            </NavLink>
          ))
        }
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
};

Sidebar.defualtProps = {
  title: '',
  open: true,
};

export default Sidebar;
