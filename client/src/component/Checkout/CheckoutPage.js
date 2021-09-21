import React, { useState } from 'react';
import { checkOutStyle } from '../styles';
import PageItems from './PageItems';
import { connect } from 'react-redux';
import {
    Grid,
} from '@material-ui/core';
import DeliveryMethod from './Accordion/DeliveryMethod';
import ContactInformation from './Accordion/ContactInformation';
import Payment from './Accordion/Payment';
import Summary from './Accordion/Summary';


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

const mapStateToProps = (state) => {
    return {
        checkout: state.checkout
    }
}

export default connect(mapStateToProps)(CheckoutPage);
