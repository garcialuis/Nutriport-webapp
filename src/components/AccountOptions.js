import { Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AccountOptions = ({ anchorEl, onClose }) => {
    return (
        <div>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={onClose}
            >
                <MenuItem onClick={onClose}><Link to='/account' className='header__menu--option'>My Account</Link></MenuItem>
                <MenuItem onClick={onClose}><Link to='/' className='header__menu--option'>Log Out</Link></MenuItem>
            </Menu>
        </div>
    )
}

export default AccountOptions
