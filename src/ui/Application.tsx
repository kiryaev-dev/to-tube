import * as React from 'react'
import { IoMdMenu } from "react-icons/all"

import { ApplicationContext } from "./contexts/contexts"

import './Application.css'
import IApplicationContext from "./contexts/IApplicationContext"
import NavigationMenu from "./NavigationMenu"
import {useState} from "react"
import IPage from "./IPage"

import HomePage from './pages/HomePage'

const Pages: Array<IPage> = [
    HomePage
]

function Application() {
    const [currentPage, setCurrentPage] = useState(Pages[0])
    const [isSidebarOpen, setSidebarOpen] = useState(false)

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
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="toggle-menu">
                        <IoMdMenu size={24} />
                    </button>
                    <h1 className="title">ToTube</h1>
                </header>
                <div className="content">
                    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                        <NavigationMenu />
                    </div>
                    <main className="page">
                        {currentPage.page}
                    </main>

                    { isSidebarOpen ? <div className="dim" /> : <></> }
                </div>
            </div>
        </ApplicationContext.Provider>
    )
}

export default Application