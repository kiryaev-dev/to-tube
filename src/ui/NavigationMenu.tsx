import * as React from 'react'

import {ApplicationContext} from "./contexts/contexts"
import {useContext} from "react"
import NavigationMenuItem from "./NavigationMenuItem"

function NavigationMenu() {
    const applicationContext = useContext(ApplicationContext)

    const {pages, currentPage} = applicationContext!!

    return (
        <div className="navigation-menu">
            <nav className="general">
                {
                    pages.map((page) => (
                        <NavigationMenuItem
                            page={page}
                            isSelected={page === currentPage} />
                    ))
                }
            </nav>
        </div>
    )
}

export default NavigationMenu