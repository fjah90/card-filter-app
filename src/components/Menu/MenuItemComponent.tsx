import React, { forwardRef } from 'react'
import ListItem from '@mui/material/ListItem'
import { NavLink, NavLinkProps } from 'react-router-dom'

export interface MenuItemComponentProps {
    className?: string
    link?: string | null
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const MenuItemComponent: React.FC<MenuItemComponentProps> = props => {
    const { className, onClick, link, children } = props

    if (!link || typeof link !== 'string') {
        return (
            <ListItem
                button
                className={className}
                children={children}
                onClick={onClick}
            />
        )
    }

    return (
        <ListItem
            button
            className={className}
            children={children}
            component={forwardRef((props: NavLinkProps, ref: any) => <NavLink  {...props} />)}
            to={link}
        />
    )
}

export default MenuItemComponent
