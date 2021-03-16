import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({

    palette: {
        primary: {
            light: '#a2cf6e',
            main: '#8bc34a',
            dark: '#618833'
        },
        secondary: {
            light: '#ffcf33',
            main: '#ffc400',
            dark: '#b28900'
        }
    },
    typography: {
        fontFamily: 'Georgia'
    }

});