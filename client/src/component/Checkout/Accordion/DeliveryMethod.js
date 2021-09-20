import React, { useState } from 'react';
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Select,
    MenuItem,
    FormControl,
    Grid,
    InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField } from '@mui/material';
import Continue from '../Button/Continue';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    confirmBtn: {
        marginRight: theme.spacing(5),
        float: 'right',
        padding: theme.spacing(1, 4),
        marginBottom: theme.spacing(2),
    },
    select: {
        width: 300
    },
    marginLeft: {
        marginLeft: theme.spacing(3)
    }
}))

const PICK_UP = "PickUp";
const DELIVERY = "Delivery";

const DeliveryMethod = (props) => {
    const classes = useStyles();
    const {
        expanded,
        handleExpand,
    } = props;

    const [pickupTime, setPickupTime] = useState(moment().format("YYYY-MM-DDTkk:mm"));
    const [deliveryMethod, setDeliveryMethod] = useState('');


    const handleDeliverySelect = (e) => {
        setDeliveryMethod(e.target.value);
    }

    const handlePickupTimeSelect = (e) => {
        setPickupTime(e.target.value);
    }

    const handleSubmit = () => {

    }

    return (
        <Accordion className={classes.marginTop} expanded={expanded === 'delivery'} onChange={handleExpand('delivery')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography variant='h4'>Delivery Method</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                    <Grid container spacing={2} direction='column'>
                        <Grid item container xs>
                            <Grid item xs={3}>
                                <Typography style={{ lineHeight: '50px' }} component='h3' variant='h6'>Choose your delivery method: </Typography>
                            </Grid>
                            <Grid item>
                                <FormControl required>
                                    <InputLabel>Delivery Methods: </InputLabel>
                                    <Select
                                        value={deliveryMethod}
                                        onChange={handleDeliverySelect}
                                        className={classes.select}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                        label="Delivery Method"
                                    >
                                        <MenuItem value={PICK_UP}>Pick Up</MenuItem>
                                        <MenuItem value={DELIVERY}>Delivery</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {deliveryMethod === PICK_UP && (
                            <Grid item container>
                                <TextField
                                    id='pickuptime'
                                    label='Choose a pickup time'
                                    type='datetime-local'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={pickupTime}
                                    onChange={handlePickupTimeSelect}
                                />
                                <Typography className={classes.marginLeft} component='h3' variant='body1'>*Pick Up Address: Ryan Home Street, Toronto, ON</Typography>
                            </Grid>
                        )}

                    </Grid>
                </form>
            </AccordionDetails>
            <Grid item>
                <Continue type='submit' />
            </Grid>
        </Accordion>
    )
}

export default DeliveryMethod
