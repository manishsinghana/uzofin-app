import { Outlet } from "react-router-dom";
import Header from "../shared/components/layout/Header";
import Footer from "../shared/components/layout/Footer";

function DefaultLayout() {
    return (
        <>
            <Header/>
            <main className="main" role="main">
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}

export {DefaultLayout};