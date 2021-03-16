// import { createMuiTheme } from '@material-ui/core/styles';
import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';

// Theme Colors:
const primaryMain = '#8bc34a',
    primaryLight = '#a2cf6e',
    primaryDark = '#618833';

const secondaryMain = '#ffc400',
    secondaryLight = '#ffcf33',
    secondaryDark = '#b28900';

export const theme = createMuiTheme({

    palette: {
        primary: {
            light: primaryLight,
            main: primaryMain,
            dark: primaryDark
        },
        secondary: {
            light: secondaryLight,
            main: secondaryMain,
            dark: secondaryDark
        }
    },
    typography: {
        fontFamily: 'Georgia'
    },
    overrides: {
        MuiMenu: {
            paper: {
                background: secondaryMain
            }
        }
    }

});