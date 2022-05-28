import "./Home.css"
import Navbar from "components/Navbar/Navbar"
import PaletaLista from "components/PaletaLista/PaletaLista"


function Home() {
    return ( <div className="Home">
        <Navbar />
            <div className="Home__container">
        <PaletaLista />
            </div>
    </div>
    )
}

export default Home