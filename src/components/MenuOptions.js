import { Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MenuOptions = ({ anchorEl, onClose }) => {
    return (
        <div>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={onClose}
            >
                <MenuItem onClick={onClose}><Link to='/test' className='header__menu--option'>Food Items</Link></MenuItem>
                <MenuItem onClick={onClose}><Link to='/activity' className='header__menu--option'>Activity</Link></MenuItem>
                <MenuItem onClick={onClose}><Link to='/' className='header__menu--option'>Dashboard</Link></MenuItem>
            </Menu>
        </div>
    )
}

export default MenuOptions