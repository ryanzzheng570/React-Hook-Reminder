import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    confirmBtn: {
        marginRight: theme.spacing(5),
        float: 'right',
        padding: theme.spacing(1, 4),
        marginBottom: theme.spacing(2),
    },
}))

const Continue = (props) => {
    const classes = useStyles();
    const { onClick, type } = props;
    return (
        <Button
            type={type}
            color='primary'
            variant='contained'
            className={classes.confirmBtn}
        >Continue
        </Button>
    )
}

export default Continue;