import * as React from 'react'

export default interface IPage {
    id: string
    title: string
    icon: React.ReactElement
    page: React.ReactElement
}