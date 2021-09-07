import { createTheme } from "@material-ui/core";

export const mainTheme = createTheme({
    spacing: 10,
    typography: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: 15,
        textAlign: 'left',
        button: {
            textTransform: "none",
            letterSpacing: 0,
            padding: 0
        },
        h4: {
            fontSize: 27
        }
    },
    overrides: {
        MuiInput: {
            input: {
                fontWeight: "bold"
            },
        },
    },
    palette: {
        primary: { main: 'rgb(255, 166, 0)' },
        secondary: { main: "#B0B0B0" }
    },
});
