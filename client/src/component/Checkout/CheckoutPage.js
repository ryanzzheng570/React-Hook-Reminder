import React, { useState } from 'react';
import { checkOutStyle } from '../styles';
import PageItems from './PageItems';
import { connect } from 'react-redux';
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Delivery from './Accordion/Delivery';


const CheckoutPage = (props) => {
    const classes = checkOutStyle();
    const { checkout } = props
    const [expanded, setExpanded] = useState('delivery');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [pickupTime, setPickupTime] = useState(new Date());

    const handleExpand = (accordion) => (e, isExpanded) => {
        setExpanded(isExpanded ? accordion : false);
    }

    const handleDeliverySelect = (e) => {
        setDeliveryMethod(e.target.value);
    }

    return (
        <div className={classes.container}>
            <Grid container justifyContent='center'>
                <Grid item xs={8}>
                    <Delivery
                        expanded={expanded}
                        handleMethodSelect={handleDeliverySelect}
                        deliveryMethod={deliveryMethod}
                        pickupTime={pickupTime}
                        handleExpand={handleExpand}
                    />
                    {/* <Accordion className={classes.marginTop} expanded={expanded === 'delivery'} onChange={handleExpand('delivery')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography variant='h4'>Delivery Method</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
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
                                            defaultvalue={pickupTime}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <Typography className={classes.marginLeft} component='h3' variant='body1'>*Pick Up Address: Ryan Home Street, Toronto, ON</Typography>
                                    </Grid>
                                )}

                                <Grid item>
                                    <Continue />
                                </Grid>
                            </Grid>

                        </AccordionDetails>
                    </Accordion> */}
                    <Accordion disabled className={classes.marginTop} expanded={expanded === 'orders'} onChange={handleExpand('orders')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <Typography variant='h4'>Your Order Summary</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <PageItems items={checkout} />
                        </AccordionDetails>
                        <Button color='primary' variant='contained' className={classes.confirmBtn}>Confirm My Orders</Button>
                    </Accordion>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}

export default connect(mapStateToProps)(CheckoutPage);
