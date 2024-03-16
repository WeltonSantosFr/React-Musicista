
import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { Button } from "../Button"

export const ThemeToggle = () => {
    const initialTheme = localStorage.getItem("@theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const [userTheme, setUserTheme] = useState(initialTheme);

    useEffect(() => {
        // Define a classe 'dark' na tag HTML conforme o tema do usuário
        document.documentElement.classList.toggle("dark", userTheme === "dark");
    }, [userTheme]);

    const toggleTheme = () => {
        // Alterna entre os temas e atualiza o estado e o localStorage
        const newTheme = userTheme === "dark" ? "light" : "dark"
        setUserTheme(newTheme)
        localStorage.setItem("@theme", newTheme)
    }

    return (
        <Button onClick={toggleTheme}>
            {userTheme === "dark" ? <FaMoon /> : <FaSun />}
        </Button>
    )
}
