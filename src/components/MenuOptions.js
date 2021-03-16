import { Menu, MenuItem } from '@material-ui/core';

const MenuOptions = ({ anchorEl, keepMounted, open, onClose }) => {
    return (
        <div>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={onClose}
            >
                <MenuItem onClick={onClose}>Food Items</MenuItem>
                <MenuItem onClick={onClose}>Activity</MenuItem>
                <MenuItem onClick={onClose}>Dashboard</MenuItem>
            </Menu>
        </div>
    )
}

export default MenuOptions