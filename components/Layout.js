import NavBar from "./NavBar"

const Layout = ({children}) => {
    return (
        <div className="flex flex-col">
            <NavBar/>
            <main className="ms-10 me-10 pb-10">{children}</main>
        </div>
    )

}

export default Layout