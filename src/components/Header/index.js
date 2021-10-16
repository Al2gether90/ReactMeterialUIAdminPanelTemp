import React,{ useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Menu, MenuItem, Button } from "@material-ui/core";
import { PermIdentity, Menu as MenuIcon } from "@material-ui/icons";
import { useHistory } from "react-router";

import './style.scss';

const Header = ({ toggleSidebar }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const visitProfilePage = () => {
    history.push('/profile');
    setAnchorEl(null);
  };

  return (
    <div className="app-header">
      <div className="container">
        <div>
          <Button className="toggle-btn" onClick={toggleSidebar}>
            <MenuIcon />
          </Button>
        </div>
        <div className="user-menu">
          <IconButton onClick={handleClick}>
            <PermIdentity />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>ETH Address</MenuItem>
            <MenuItem onClick={handleClose}>ETH Balance</MenuItem>
            <MenuItem onClick={handleClose}>MTO Balance</MenuItem>
            <MenuItem onClick={visitProfilePage}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Disconnect</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func,
};

Header.propTypes = {
  toggleSidebar: () => {},
};

export default Header;