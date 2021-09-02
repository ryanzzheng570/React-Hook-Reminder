import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    typography: {
        fontFamily: "Open Sans, sans-serif",
        fontSize: 15,
        textAlign: 'left',
        button: {
            textTransform: "none",
            letterSpacing: 0,
            padding: 0
            // fontWeight: "bold",
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
        MuiButton: {
            root: {
                padding: 0
            },
            text: {
                padding: 0
            },
            outlined: {
                padding: 0
            }
        },
        MuiTypography: {
            root: {
                textAlign: 'left'
            }
        }
    },
    palette: {
        primary: { main: "#3A8DFF" },
        secondary: { main: "#B0B0B0" }
    },
});
