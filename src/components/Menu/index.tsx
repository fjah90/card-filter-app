import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import IconDashboard from '@material-ui/icons/DashboardTwoTone'
import IconCard from '@material-ui/icons/CardMembership'
import IconMenu from '@material-ui/icons/Menu'
import IconMenuOpen from '@material-ui/icons/MenuOpen'

import MenuItem from './MenuItems'

const MenuItems = [
    {
        name: 'Dashboard',
        link: '/',
        Icon: IconDashboard,
    },
    {
        name: 'Cards',
        link: '/cards',
        Icon: IconCard,
    },
]

const Menu: React.FC = () => {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false)


    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
                docked: !isOpen ? classes.drawerPaperOpen : classes.drawerPaperClose,
            }}
        >
            <Button onClick={() => setOpen(!isOpen)} >
                <ListItemIcon className={classes.menuItemIcon}>
                    {!isOpen && <IconMenuOpen />}
                    {isOpen && <IconMenu />}
                </ListItemIcon>
            </Button>
            <List component="nav" className={classes.appMenu} disablePadding>
                {MenuItems.map((item, index) => (
                    <MenuItem {...item} key={index} />
                ))}
            </List>
        </Drawer>
    )
}

const drawerWidth = 240
const transitionDuration = 1000;

const useStyles = makeStyles(theme =>
    createStyles({
        appMenu: {
            width: '100%',
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(4),
            background: '#282c34',
            color: '#fff',
            overflow: 'hidden',
        },
        drawerPaperOpen: {
            width: drawerWidth,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.easeOut,
                duration: transitionDuration
            }),
        },
        drawerPaperClose: {
            width: 65,
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.easeOut,
                duration: transitionDuration
            }),
        },
        navList: {
            width: drawerWidth,
        },
        menuItem: {
            width: drawerWidth,
        },
        menuItemIcon: {
            color: '#97c05c',
            justifyContent: 'center'
        },
    }),
)

export default Menu;
