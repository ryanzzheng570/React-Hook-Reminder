import React from 'react'
import {
    Drawer,
    CssBaseline,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { SUSHI_TYPES, SUSHI_TYPES_MAP } from '../../util/constants';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 250;
const toolbarHeight = 70;
const iconLeftPadding = 11;
const iconBottomPadding = 1;

const useStyles = makeStyles((theme) => ({
    navDrawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: toolbarHeight,
    },
    icon: {
        paddingLeft: iconLeftPadding,
    },
    sushi_type_icon: {
        paddingLeft: iconLeftPadding,
        paddingBottom: iconBottomPadding
    },
}));

const getSushiTypeIcon = (type) => {
    return SUSHI_TYPES_MAP.get(type);
}

const NavDrawer = () => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const handleMainMenu = () => {
        history.push("/")
    }

    return (
        <>
            {/* Drawer for Menu Navigation*/}
            <Drawer
                className={classes.navDrawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
                hidden={location.pathname === '/' ? false : true}
            >
                <CssBaseline />
                <List>
                    <ListItem onClick={handleMainMenu} button key={"MainMenu"}>
                        <ListItemIcon className={classes.icon}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={"MainMenu"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {SUSHI_TYPES.map((sushiType) => (
                        <ListItem button key={sushiType}>
                            <ListItemIcon className={classes.sushi_type_icon}>
                                {getSushiTypeIcon(sushiType)}
                            </ListItemIcon>
                            <ListItemText primary={sushiType} />
                        </ListItem>
                    )
                    )}
                </List>
                <Divider />
                <List>
                    <ListItem button key={"Info"}>
                        <ListItemIcon className={classes.icon}>
                            <InfoIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Info"} />
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default NavDrawer
