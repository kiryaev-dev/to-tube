import * as React from 'react'
import IApplicationContext from "./IApplicationContext"

export const ApplicationContext = React.createContext<IApplicationContext | undefined>(undefined)