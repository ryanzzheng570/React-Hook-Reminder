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
import DeliveryMethod from './Accordion/DeliveryMethod';
import ContactInformation from './Accordion/ContactInformation';


const CheckoutPage = (props) => {
    const classes = checkOutStyle();
    const { checkout } = props
    const [expanded, setExpanded] = useState('delivery');


    const handleExpand = (accordion) => (e, isExpanded) => {
        console.log(accordion)
        setExpanded(isExpanded ? accordion : false);
    }

    const handleContinue = (nextStep) => {
        setExpanded(nextStep);
    }

    return (
        <div className={classes.container}>
            <Grid container justifyContent='center'>
                <Grid item xs={8}>
                    <DeliveryMethod
                        expanded={expanded}
                        handleExpand={handleExpand}
                        nextStep={handleContinue}
                    />
                    <ContactInformation
                        expanded={expanded}
                        handleExpand={handleExpand}
                        nextStep={handleContinue}
                    />

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
