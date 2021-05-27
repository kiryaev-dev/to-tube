import * as ReactDOM from 'react-dom'
import * as React from 'react'

import './index.css'
import Application from "./ui/Application";

const root = document.getElementById("root") as HTMLElement

ReactDOM.render(
    <Application />,
    root
)