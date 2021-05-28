import IPage from "../IPage"

export default interface IApplicationContext {
    pages: Array<IPage>
    open: (page: IPage) => void
    currentPage: IPage
}