import React, { useState } from 'react'
import { makeStyles, createStyles } from '@mui/styles'
import { createTheme } from '@mui/material/styles'

import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import ListItemIcon from '@mui/material/ListItemIcon'

import IconDashboard from '@mui/icons-material/DashboardTwoTone'
import IconCard from '@mui/icons-material/CardMembership'
import IconMenu from '@mui/icons-material/Menu'
import IconMenuOpen from '@mui/icons-material/MenuOpen'

import MenuItem from './MenuItems'

const objMenuItems = [
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
                root: !isOpen ? classes.drawerPaperOpen : classes.drawerPaperClose,
                paper: !isOpen ? classes.drawerPaperOpen : classes.drawerPaperClose,
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
                {objMenuItems.map((item, index) => (
                    <MenuItem {...item} key={index} />
                ))}
            </List>
        </Drawer>
    )
}

const drawerWidth = 240
const transitionDuration = 1000;

const theme = createTheme({
    spacing: 4,
});
const useStyles = makeStyles(
    createStyles({
        appMenu: {
            width: '100%',
        },
        drawerPaperOpen: {
            width: drawerWidth,
            backgroundColor: '#282c34 !important',
            color: '#fff !important',
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.easeOut,
                duration: transitionDuration
            }),
        },
        drawerPaperClose: {
            width: (drawerWidth / 4),
            backgroundColor: '#282c34 !important',
            color: '#fff !important',
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
            color: '#009688 !important',
            justifyContent: 'center'
        },
    }),
)

export default Menu;
