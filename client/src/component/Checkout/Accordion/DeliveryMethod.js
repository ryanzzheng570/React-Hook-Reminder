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
    FormControlLabel,
    Checkbox
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { TextField } from '@mui/material';
import Continue from '../Button/Continue';
import moment from 'moment';
import { connect } from 'react-redux';
import { ACCORDION_CONTACTINFO, ACCORDION_DELIVERY, DELIVERY_DELIVERY, DELIVERY_PICK_UP } from '../../../util/constants';
import { addDeliveryMethod } from '../../../store/utils/thunkCreators';

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
    },
    marginTop: {
        marginTop: theme.spacing(4)
    },
}));

const DeliveryMethod = (props) => {
    const classes = useStyles();
    const {
        expanded,
        handleExpand,
        addDeliveryMethod,
        nextStep
    } = props;

    const [pickupTime, setPickupTime] = useState(moment().format("YYYY-MM-DDTkk:mm"));
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [isPayingCash, setIsPayingCash] = useState(false);

    const handleDeliverySelect = (e) => {
        setDeliveryMethod(e.target.value);
    }

    const handlePickupTimeSelect = (e) => {
        setPickupTime(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addDeliveryMethod(deliveryMethod, pickupTime, isPayingCash);
        nextStep(ACCORDION_CONTACTINFO);
    }

    const handlePayingCashCheck = (e) => {
        setIsPayingCash(e.target.checked)
    }

    return (
        <Accordion disabled={expanded !== ACCORDION_DELIVERY} className={classes.marginTop} expanded={expanded === ACCORDION_DELIVERY} onChange={handleExpand(ACCORDION_DELIVERY)}>
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
                                        <MenuItem value={DELIVERY_PICK_UP}>Pick Up</MenuItem>
                                        <MenuItem value={DELIVERY_DELIVERY}>Delivery</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        {deliveryMethod && <Grid item container>
                            <TextField
                                id='pickuptime'
                                label={`Choose a ${deliveryMethod === DELIVERY_PICK_UP ? 'pickup' : 'delivery'} time`}
                                type='datetime-local'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={pickupTime}
                                onChange={handlePickupTimeSelect}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        id='isSpecificDate'
                                        checked={isPayingCash}
                                        onChange={handlePayingCashCheck}
                                        color='primary'
                                    />}
                                label="Would you like to pay cash?"
                                className={classes.marginLeft}
                            />
                        </Grid>}
                        {deliveryMethod === DELIVERY_PICK_UP && (
                            <Grid item>
                                <Typography component='h3' variant='body1'>*Pick Up Address: Ryan Home Street, Toronto, ON</Typography>
                            </Grid>
                        )}
                    </Grid>
                    <Grid item>
                        <Continue type='submit' />
                    </Grid>
                </form>
            </AccordionDetails>

        </Accordion>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDeliveryMethod: (deliveryMethod, time, isPayingCash) => {
            dispatch(addDeliveryMethod(deliveryMethod, time, isPayingCash));
        }
    }
};


export default connect(null, mapDispatchToProps)(DeliveryMethod)
