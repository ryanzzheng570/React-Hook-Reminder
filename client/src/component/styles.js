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
        marginTop: theme.spacing(7),
        backgroundColor: 'white',
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    confirmBtn: {
        marginRight: theme.spacing(5),
        float: 'right',
        padding: theme.spacing(1, 4),
        marginBottom: theme.spacing(2),
    },
    form: {
        display: 'flex'
    },
    marginLeft: {
        marginLeft: theme.spacing(3)
    }
}));