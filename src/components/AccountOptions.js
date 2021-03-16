import { Menu, MenuItem } from '@material-ui/core';

const AccountOptions = ({ anchorEl, onClose }) => {
    return (
        <div>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={onClose}
            >
                <MenuItem onClick={onClose}>My Account</MenuItem>
                <MenuItem onClick={onClose}>Log Out</MenuItem>
            </Menu>
        </div>
    )
}

export default AccountOptions
