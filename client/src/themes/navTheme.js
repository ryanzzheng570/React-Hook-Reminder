import { createTheme } from "@material-ui/core";

export const navTheme = createTheme({
    spacing: 10,
    typography: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: 15,
        textAlign: 'center',
        button: {
            textTransform: "none",
            fontSize: 25,
            color: 'white'
        },
        h6: {
            color: 'white'
        }
    },
    palette: {
        primary: { main: 'rgb(255,166,0)' },
        // secondary: { main: "#909090" }

    }

})