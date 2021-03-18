import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import ActivitySummaryTile from './ActivitySummaryTile';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1
    },
    activitiesContainer: {
        background: theme.palette.secondary.main, //'#3f51b5'
        '&:hover': {
            background: theme.palette.secondary.light
        },
        marginTop: '5rem',
        borderRadius: '.5rem',
        // border: '.15rem solid black'
    },
    activities: {
        // backgroundColor: 'red',
        paddingLeft: '2rem', //6
        paddingRight: '2rem',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center'
        
    }
}));

const DailyActivitySummary = () => {

    const classes = useStyles();
    const activityTitles = ['Steps', 'Stand Hours', 'Calories Burned', 'Exercise Minutes'];

    const handleClick = () => {
        alert('clicked')
    }

    return (
        <div>
            <Container className={classes.activitiesContainer}
                maxWidth='md'
                onClick={handleClick}
            >
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Typography variant='h5'>Daily Activity Summary</Typography>
                </Box>
                <div className={classes.activities}>
                    {
                        activityTitles.map((activity, index) => {
                            return <ActivitySummaryTile key={index} activityTitle={activity} value={index}/>
                        })
                    }
                </div>
                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
                <Typography component="div" style={{ backgroundColor: '#ffe8fc', height: '50vh' }} /> */}
            </Container>
        </div>
    )
}

export default DailyActivitySummary
