import React from 'react';
import clsx from 'clsx';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FoodItemCard from './FoodItemCard';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        background: theme.palette.secondary.main,
        border: '.15rem solid black',
        padding: '1rem',
        borderRadius: '.5rem',
        marginTop: '1rem'
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const FoodItemsRow = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        // <React.Fragment>
        //     <Grid item xs={4}>
        //       <Paper className={classes.paper}>item</Paper>
        //     </Grid>
        //     <Grid item xs={4}>
        //       <Paper className={classes.paper}>item</Paper>
        //     </Grid>
        //     <Grid item xs={4}>
        //       <Paper className={classes.paper}>item</Paper>
        //     </Grid>
        //   </React.Fragment>
          <React.Fragment>
            <Grid item xs={4}>
                <FoodItemCard className={classes.paper} expanded={expanded} handleExpandClick={handleExpandClick} />
            </Grid>
            <Grid item xs={4}>
                <FoodItemCard expanded={expanded} handleExpandClick={handleExpandClick} />
            </Grid>
            <Grid item xs={4}>
                <FoodItemCard expanded={expanded} handleExpandClick={handleExpandClick} />
            </Grid>
        </React.Fragment>
    )
}

export default FoodItemsRow
