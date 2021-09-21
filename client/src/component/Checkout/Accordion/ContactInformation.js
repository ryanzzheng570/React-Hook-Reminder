import React, { useState } from 'react'
import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    Grid
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core';
import Continue from '../Button/Continue';

const useStyles = makeStyles((theme) => ({
    input: {
        width: 300
    }
}))

const ContactInformation = (props) => {
    const classes = useStyles();
    const {
        expanded,
        handleExpand,
        nextStep
    } = props;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        nextStep('payment');
    }

    return (
        <Accordion disabled={expanded !== 'contact'} expanded={expanded === 'contact'} onChange={handleExpand('contact')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography variant='h4'>Contact Information</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                    <Grid container direction='column'>
                        <Grid item container spacing={2}>
                            <Grid item>
                                <TextField
                                    className={classes.input}
                                    variant='standard'
                                    label='Name for the order'
                                    value={name}
                                    onChange={handleNameChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    className={classes.input}
                                    variant='standard'
                                    label='Phone Number'
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    className={classes.input}
                                    variant='standard'
                                    label='Email'
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Continue type='submit' />
                        </Grid>
                    </Grid>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

export default ContactInformation
