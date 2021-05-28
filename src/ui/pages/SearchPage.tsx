import * as React from 'react'
import {IoMdSearch} from "react-icons/all"
import IPage from "../IPage"

import './SearchPage.css'

function SearchPage() {
    return (
        <div className="search-page">
            <input className="search" placeholder="Search..." />
            <div>

            </div>
        </div>
    )
}

const page: IPage = {
    icon: <IoMdSearch size={24} />,
    id: "search",
    page: <SearchPage />,
    title: "Search"
}

export default page