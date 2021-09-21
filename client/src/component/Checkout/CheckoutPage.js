import React, { useState } from 'react';
import { checkOutStyle } from '../styles';
import {
    Grid,
} from '@material-ui/core';
import DeliveryMethod from './Accordion/DeliveryMethod';
import ContactInformation from './Accordion/ContactInformation';
import Payment from './Accordion/Payment';
import Summary from './Accordion/Summary';


const CheckoutPage = () => {
    const classes = checkOutStyle();
    const [expanded, setExpanded] = useState('delivery');


    const handleExpand = (accordion) => (e, isExpanded) => {
        setExpanded(isExpanded ? accordion : false);
    }

    const handleContinue = (nextStep) => {
        setExpanded(nextStep);
    }

    return (
        <div className={classes.container}>
            <Grid container justifyContent='center'>
                <Grid item>
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
                    <Payment
                        expanded={expanded}
                        handleExpand={handleExpand}
                        nextStep={handleContinue}
                    />
                    <Summary
                        expanded={expanded}
                        handleExpand={handleExpand}

                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default CheckoutPage;
