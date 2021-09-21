import React from 'react'
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ACCORDION_SUMMARY } from '../../../util/constants';
import PageItems from '../PageItems';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    marginTop: {
        marginTop: theme.spacing(4)
    },
}));

const Summary = (props) => {
    const classes = useStyles();
    const { expanded, handleExpand } = props;


    return (
        <Accordion disabled={expanded !== ACCORDION_SUMMARY} className={classes.marginTop} expanded={expanded === ACCORDION_SUMMARY} onChange={handleExpand(ACCORDION_SUMMARY)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography variant='h4'>Your Order Summary</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <PageItems />
            </AccordionDetails>
            {/* <Button color='primary' variant='contained' className={classes.confirmBtn}>Confirm My Orders</Button> */}
        </Accordion>
    )
}

export default Summary;
