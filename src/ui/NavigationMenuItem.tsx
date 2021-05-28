import * as React from 'react'

import "./NavigationMenuItem.css"

interface INavigationMenuItemProperties {
    title: string
    icon: React.ReactElement
    isSelected?: boolean
    onClick?: () => void
}

function NavigationMenuItem(props: INavigationMenuItemProperties) {
    const {icon, title, onClick} = props
    const isSelected = props.isSelected || false;

    return (
        <div
            className={`navigation-menu-item ${isSelected ? 'selected' : ''}`}
            onClick={onClick}>
            {icon}
            <span className="title">{title}</span>
        </div>
    )
}

export default NavigationMenuItem