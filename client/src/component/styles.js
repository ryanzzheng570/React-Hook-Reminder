import { makeStyles } from "@material-ui/core";

export const rootStyle = makeStyles((theme) => ({
    root: {
        marginTop: 'auto',
        marginLeft: theme.spacing(25),
        padding: theme.spacing(2),
        fontFamily: 'inherit',
        backgroundColor: 'white'
    }
}));

export const checkOutStyle = makeStyles((theme) => ({
    container: {
        margin: theme.spacing(3, 20, 0, 20),
        backgroundColor: 'white',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));