import * as React from 'react'
import { MdHome } from "react-icons/all"

import { ApplicationContext } from "./contexts/contexts"

import './Application.css'
import IApplicationContext from "./contexts/IApplicationContext"
import NavigationMenu from "./NavigationMenu"
import {useState} from "react"
import IPage from "./IPage"

const Pages: Array<IPage> = [
    {
        id: 'home',
        title: 'Home',
        icon: <MdHome size={24} />,
        page: <h1>Home</h1>
    },
    {
        id: 'trends',
        title: 'Trends',
        icon: <MdHome size={24} />,
        page: <h1>Trends</h1>
    }
]

function Application() {
    const [currentPage, setCurrentPage] = useState(Pages[0])

    const context: IApplicationContext = {
        pages: Pages,
        open: function (page) {
            setCurrentPage(page)
        },
        currentPage: currentPage
    }

    return (
        <ApplicationContext.Provider value={context}>
            <div className="application">
                <header className="top-bar">

                </header>
                <div className="content">
                    <div className="sidebar">
                        <NavigationMenu />
                    </div>
                    <main className="page">
                        {currentPage.page}
                    </main>
                </div>
            </div>
        </ApplicationContext.Provider>
    )
}

export default Application