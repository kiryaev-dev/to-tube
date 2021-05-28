import * as React from 'react'

import "./NavigationMenuItem.css"
import IPage from "./IPage"
import {useContext} from "react";
import {ApplicationContext} from "./contexts/contexts";

interface INavigationMenuItemProperties {
    page: IPage
    isSelected?: boolean
}

function NavigationMenuItem(props: INavigationMenuItemProperties) {
    const {icon, title} = props.page
    const isSelected = props.isSelected || false;

    const applicationContext = useContext(ApplicationContext)

    return (
        <div
            onClick={() => {
                applicationContext!!.open(props.page)
            }}
            className={`navigation-menu-item ${isSelected ? 'selected' : ''}`}>
            {icon}
            <span className="title">{title}</span>
        </div>
    )
}

export default NavigationMenuItem