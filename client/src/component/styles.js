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