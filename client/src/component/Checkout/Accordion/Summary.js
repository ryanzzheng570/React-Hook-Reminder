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
    confirmBtn: {
        marginRight: theme.spacing(5),
        float: 'right',
        padding: theme.spacing(1, 4),
        marginBottom: theme.spacing(2),
    },
}));

const Summary = (props) => {
    const classes = useStyles();
    const { expanded, handleExpand } = props;

    const handleConfirmOrder = () => {

    }

    return (
        <Accordion disabled={expanded !== ACCORDION_SUMMARY} className={classes.marginTop} expanded={expanded === ACCORDION_SUMMARY} onChange={handleExpand(ACCORDION_SUMMARY)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography variant='h4'>Your Order Summary</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container direction='column' spacing={2}>
                    <Grid item>
                        <PageItems />
                    </Grid>
                    <Grid item>
                        <Button onClick={handleConfirmOrder} color='primary' variant='contained' className={classes.confirmBtn}>Confirm My Orders</Button>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default Summary;
