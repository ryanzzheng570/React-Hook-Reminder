import React from 'react'
import { makeStyles } from '@material-ui/core'
import {
    Grid,
    Typography,
    Paper,
    ButtonBase
} from '@material-ui/core'
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        // margin: 'auto',
        maxWidth: '100%',
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const PageItems = (props) => {
    const classes = useStyles();
    const { checkout } = props;
    const { items } = checkout;

    return (
        <div className={classes.root}>
            {items.length > 0 ? items.map((item) => {
                return (
                    <div key={item.checkoutItemId}>
                        <Paper className={classes.paper}>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <ButtonBase className={classes.image}>
                                        <img className={classes.img} alt="complex" src={item.imageUrl} />
                                    </ButtonBase>
                                </Grid>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="subtitle1">
                                                {item.name} * {item.quantity}
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                {item.description}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                Special Request: {item.specialRequest ? item.specialRequest : 'N/A'}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                                Remove
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid xs={2} item>
                                        <Typography variant="subtitle1">Price: ${item.singlePrice}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">Total Price: ${item.singlePrice}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                )
            })

                : <></>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}

export default connect(mapStateToProps)(PageItems);
