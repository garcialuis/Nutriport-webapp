import { makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1
    },
    pageTile: {
        // marginTop: '.8rem',
        // marginBottom: '.8rem',
        background: theme.palette.secondary.light,
        margin: '.8rem',
        padding: theme.spacing(2),
        display: 'inline-grid',
        minWidth: '9rem',
        maxWidth: '9rem',
        minHeight: '7rem',
        maxHeight: '7rem',
        // borderRadius: '.8rem',
        border: '.1rem dashed black'
    },
    dataValue: {
        textAlign: 'center'
    },
    title: {
        textAlign: 'center'
    }
}));

const ActivitySummaryTile = ({activityTitle, value}) => {

    const classes = useStyles();

    return (
        <Paper
            className={classes.pageTile}
            // style={{ backgroundColor: '#3f51b5', border: '1px dashed black'}}
            // square={true}
            elevation={8}
        >
            <Typography className={classes.dataValue} variant='h5'>{(value + 1) * 56}</Typography>
            <Typography className={classes.title} variant='h5'>{activityTitle}</Typography>
        </Paper>
    )
}

export default ActivitySummaryTile
