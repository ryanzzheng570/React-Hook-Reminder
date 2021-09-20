import React from 'react';
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

const Delivery = (props) => {
    const classes = useStyles();
    const {
        expanded,
        handleExpand,
        handleMethodSelect,
        deliveryMethod,
        pickupTime
    } = props;

    return (
        <Accordion className={classes.marginTop} expanded={expanded === 'delivery'} onChange={handleExpand('delivery')}>
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
                                    onChange={handleMethodSelect}
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
        </Accordion>
    )
}

export default Delivery
