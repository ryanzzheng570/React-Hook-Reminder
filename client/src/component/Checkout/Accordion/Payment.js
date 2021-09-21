import React from 'react'
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Grid,
} from '@material-ui/core';
import { ACCORDION_PAYMENT, ACCORDION_SUMMARY } from '../../../util/constants';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Continue from '../Button/Continue';

const Payment = (props) => {
    const {
        expanded,
        handleExpand,
        nextStep
    } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep(ACCORDION_SUMMARY);
    }

    return (
        <Accordion expanded={expanded === ACCORDION_PAYMENT} onChange={handleExpand(ACCORDION_PAYMENT)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography variant='h4'>Payment</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container direction='column'>
                    <Grid item>
                        <Typography>
                            ***Not Supported At This Time***
                            ***Potentially VISA/PAYPAL ***
                        </Typography>
                    </Grid>
                    <Grid item>
                        <form onSubmit={handleSubmit}>
                            <Continue type='submit' />
                        </form>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default Payment
