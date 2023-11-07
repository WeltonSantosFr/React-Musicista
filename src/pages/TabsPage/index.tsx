import Footer from "../../components/Footer"
import SideBar from "../../components/SideBar"

const TabsPage = () => {
    return (
        <div className="bg-gray3 min-h-screen flex flex-col items-center justify-center">
            <div className="flex items-center justify-between w-full h-screen">
                <SideBar />
                <div className="flex flex-col items-center justify-start w-full h-screen">
                    <div className="w-full h-12 flex justify-center items-center gap-2 mt-3">
                            <input type="text" placeholder="Pesquisar" name="search" className="w-64 h-10 rounded-md text-center"/>
                            <button className="h-10 px-4 text-center rounded-md bg-gray2">Buscar</button>
                            
                    </div>
                            <div className="w-full h-[1px] bg-text"></div>
                    <div className="w-full h-screen flex flex-col">
                        <div className="w-full h-12 flex justify-evenly text-text">
                            <h5>Band</h5>
                            <p>Track</p>
                            <p>Album</p>
                            <p>Difficulty</p>
                        </div>
                        <div className="w-full h-12 flex justify-evenly text-text">
                            <h5>Gojira</h5>
                            <p>The Art of Dying</p>
                            <p>The Way of All Flesh</p>
                            <p>Medium</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default TabsPage