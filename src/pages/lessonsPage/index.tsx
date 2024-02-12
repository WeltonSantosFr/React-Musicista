import { useEffect } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { useNavigate } from "react-router-dom"

const LessonsPage = () => {
    const navigate = useNavigate()

    useEffect(() => {

        const items = document.querySelectorAll('.accordion-item')

        items.forEach((item) => {
            item.addEventListener('click', () => {

                const toggle = item.querySelector('.toggle')
                const line = item.querySelector('.line')

                toggle?.classList.toggle('hidden')
                toggle?.classList.toggle('flex')
                line?.classList.toggle('hidden')
            })
        })
    }, [])

    return (
        <div className="bg-gray3 h-screen w-screen flex flex-col justify-between items-center">
            <Header />

            <div className="w-11/12 h-full bg-grey3 flex flex-col justify-start items-start gap-2">
                <div className="text-text h-fit font-medium">
                    Guitarra e Violão
                </div>
                <div className="flex h-11/12 w-full justify-start items-start gap-4">
                    <div className="accordion-item w-56 max-w-56 bg-text rounded-md">
                        <div className="flex justify-between p-2 text-xl cursor-pointer">
                            Geral

                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="flex-none"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path className="line" d="M12 5l0 14" />
                                <path d="M5 12l14 0" /></svg>
                        </div>
                        <div className="toggle p-2 hidden flex-col">
                            <button className="hover:text-[rgb(155,155,155)]" onClick={() => navigate('notes')}>Notas Musicais</button>
                            <button className="hover:text-[rgb(155,155,155)]">Tríades</button>
                            <button className="hover:text-[rgb(155,155,155)]">Tétrades</button>
                        </div>
                    </div>
                    <div className="accordion-item cursor-pointer w-56 max-w-56 bg-text rounded-md">
                        <div className="flex justify-between p-2 text-xl ">
                            Básico

                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="flex-none"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path className="line" d="M12 5l0 14" />
                                <path d="M5 12l14 0" /></svg>
                        </div>
                        <div className="toggle p-2 hidden flex-col">
                            <button className="hover:text-[rgb(155,155,155)]">Escalas Maiores</button>
                            <button className="hover:text-[rgb(155,155,155)]">Escalas Menores</button>
                            <button className="hover:text-[rgb(155,155,155)]">Compassos Simples</button>
                        </div>
                    </div>
                    <div className="accordion-item cursor-pointer w-56 max-w-56 bg-text rounded-md">
                        <div className="flex justify-between p-2 text-xl ">
                            Intermediário

                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="flex-none"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path className="line" d="M12 5l0 14" />
                                <path d="M5 12l14 0" /></svg>
                        </div>
                        <div className="toggle p-2 hidden flex-col">
                            <button className="hover:text-[rgb(155,155,155)]">Campo Harmonico</button>
                            <button className="hover:text-[rgb(155,155,155)]">Compassos complexos</button>
                        </div>
                    </div>

                    <div className="accordion-item cursor-pointer w-56 max-w-56 bg-text rounded-md">
                        <div className="flex justify-between p-2 text-xl ">
                            Avançado

                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="flex-none"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path className="line" d="M12 5l0 14" />
                                <path d="M5 12l14 0" /></svg>
                        </div>
                        <div className="toggle p-2 hidden flex-col">
                            <button className="hover:text-[rgb(155,155,155)]">Modos Gregos</button>
                            <button className="hover:text-[rgb(155,155,155)]">Modo Jônico</button>
                            <button className="hover:text-[rgb(155,155,155)]">Modo Dórico</button>
                            <button className="hover:text-[rgb(155,155,155)]">Modo Frígio</button>
                            <button className="hover:text-[rgb(155,155,155)]">Modo Lídio</button>
                            <button className="hover:text-[rgb(155,155,155)]">Modo Mixolídio</button>
                            <button className="hover:text-[rgb(155,155,155)]">Modo Eólio</button>
                            <button className="hover:text-[rgb(155,155,155)]">Modo Lócrio</button>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default LessonsPage