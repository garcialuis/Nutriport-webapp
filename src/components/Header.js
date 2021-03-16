import { useState } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOptions from './MenuOptions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    }
}));

const Header = () => {

    const classes = useStyles();
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [profileAnchor, setProfileAnchor] = useState(null);

    const handleMenuClick = (event) => {
        setMenuAnchor(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuAnchor(null);
    }

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    <IconButton 
                        className={classes.menuButton}
                        edge='start'
                        aria-label='menu'
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Food Items</MenuItem>
                        <MenuItem onClick={handleClose}>Activity</MenuItem>
                        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                    </Menu> */}
                    <MenuOptions anchorEl={menuAnchor} keepMounted open={Boolean(menuAnchor)} onClose={handleMenuClose}/>
                    <Typography variant='h4' className={classes.title}>
                        Nutriport
                    </Typography>
                    <Button>ProfileButton</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
