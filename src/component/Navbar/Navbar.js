import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, Divider } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SUSHI_TYPE } from '../../util/constants';
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline } from '@material-ui/core';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import { minHeight } from '@material-ui/system';
import { GiSushis } from 'react-icons/gi';

const drawerWidth = 250;
const toolbarHeight = 70;

const Navbar = () => {

    const useStyles = makeStyles((theme) => ({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            marginTop: toolbarHeight,
        },
        root: {
            display: 'flex',
        },
        toolbar: { minHeight: 70 },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>

            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.title}>
                        Restaurant Name
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Drawer*/}
            <Drawer
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <CssBaseline/>
                <List>
                    <ListItem button key={"MainMenu"}>
                         <ListItemIcon><RestaurantMenuIcon/></ListItemIcon>
                        <ListItemText primary={"MainMenu"}/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    {SUSHI_TYPE.map((text) => (
                        <ListItem button key={text}>
                        
                        {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </Drawer>

        </div>
    )
}

export default Navbar
