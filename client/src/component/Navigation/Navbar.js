import { AppBar, Toolbar, Typography, Drawer, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SUSHI_TYPES, SUSHI_TYPES_MAP } from '../../util/constants';
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 250;
const toolbarHeight = 70;
const iconLeftPadding = 11;
const iconBottomPadding = 1;

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
    icon: {
        paddingLeft: iconLeftPadding,
    },
    sushi_type_icon: {
        paddingLeft: iconLeftPadding,
        paddingBottom: iconBottomPadding
    }
}));

const getSushiTypeIcon = (type) => {
    return SUSHI_TYPES_MAP.get(type);
}

//Navigation component based on Material UI
const Navbar = () => {
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
                <CssBaseline />
                <List>
                    <ListItem button key={"MainMenu"}>
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

        </div>
    )
}

export default Navbar
