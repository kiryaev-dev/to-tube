import * as React from 'react'
import IPage from "../IPage"
import {IoMdHome} from "react-icons/all"

import './HomePage.css'
import VideoPreview from "../VideoPreview";

function HomePage() {

    return (
        <div className="home-page">
            {
                [0, 1, 2, 3, 4, 5].map(() => (
                    <VideoPreview />
                ))
            }
        </div>
    )
}

const page: IPage = {
    icon: <IoMdHome size={24} />,
    page: <HomePage />,
    id: 'home',
    title: 'Home'
}

export default page