import { useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuOptions from './MenuOptions';
import AccountOptions from './AccountOptions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        textAlign: 'center'
    }
}));

const Header = () => {

    const classes = useStyles();
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [accountAnchor, setAccountAnchor] = useState(null);
    const [auth, setAuth] = useState(true);

    const handleMenuClick = (event) => {
        setMenuAnchor(event.currentTarget);
    }

    const handleMenuClose = () => {
        setMenuAnchor(null);
    }

    const handleAccountClick = (event) => {
        setAccountAnchor(event.currentTarget)
    }

    const handleAccountClose = () => {
        setAccountAnchor(null)
    }

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar>
                    {auth && 
                    <div>
                        <IconButton 
                            className={classes.menuButton}
                            edge='start'
                            aria-label='menu'
                            onClick={handleMenuClick}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>}
                    <MenuOptions anchorEl={menuAnchor} onClose={handleMenuClose}/>
                    <Typography variant='h4' className={classes.title}>
                        Nutriport
                    </Typography>
                    {auth && 
                    <div>
                        <IconButton
                            className={classes.menuButton}
                            arial-label='account-menu'
                            onClick={handleAccountClick}
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>}
                    <AccountOptions anchorEl={accountAnchor} onClose={handleAccountClose}/>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
