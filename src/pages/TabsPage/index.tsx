import Footer from "../../components/Footer"
import Header from "../../components/Header"
import TabsSideBar from "../../components/TabsSideBar"
import Tabs from '../../components/Tabs'

const TabsPage = () => {

    return (
        <div className="bg-gray3 min-h-screen flex flex-col items-center justify-start">
            <Header />
            <div className="bg-[#fff] min-h-full w-full text-text flex justify-between"> 
                <TabsSideBar />
                <Tabs/>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default TabsPage