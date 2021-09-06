import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    text: {
        wordWrap: 'break-word'
    }
}));

const CheckOutItems = ({ items }) => {
    const classes = useStyles();

    return (
        <>
            {items.map((item) => (
                <ListItem>
                    <ListItemText className={classes.text}>
                        <span>{item.name}</span>
                        <span>{item.quantity}</span>
                    </ListItemText>
                </ListItem>
            ))}
        </>
    )
}

export default CheckOutItems
