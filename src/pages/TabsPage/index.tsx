import Footer from "../../components/Footer"
import Header from "../../components/Header"
import TabsSideBar from "../../components/TabsSideBar"
import Tabs from '../../components/Tabs'

const TabsPage = () => {

    return (
        <div className="bg-gray3 h-screen flex flex-col items-center justify-start gap-0 m-0">
            <Header />
            <Tabs />
            {/* <Footer /> */}
        </div>
    )
}

export default TabsPage