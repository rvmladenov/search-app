import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import PersonIcon from '@material-ui/icons/Person';
import * as actions from '../../../store/actions/AuthActions';
import { withRouter } from 'react-router-dom';

const UserOptions = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    props.onLogout();
    props.history.push('/login');
  };

  return (
      <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
        <PersonIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => {
      dispatch(actions.logOut());
    }
  }
};

const mapStateToProps = state => {
  return {
      authorized: state.auth.authorized
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserOptions));