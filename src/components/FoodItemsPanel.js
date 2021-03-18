import React from 'react';
import { Grid, InputBase, Container, Toolbar } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FoodItemsRow from './FoodItemsRow';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        background: theme.palette.secondary.main,
        // border: '.15rem solid black',
        padding: '1rem',
        borderRadius: '.5rem',
        marginTop: '1rem'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        // flexGrow: 1,
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        // transition: theme.transitions.create('width'),
        // width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     width: '12ch',
        //     '&:focus': {
        //         width: '20ch',
        //     },
        // },
    }
}));

const FoodItemsPanel = () => {

    const classes = useStyles();

    return (
        <div>
            <Container className={classes.container} maxWidth='md'>
                <Toolbar>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        <FoodItemsRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <FoodItemsRow />
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <FoodItemsRow />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default FoodItemsPanel
