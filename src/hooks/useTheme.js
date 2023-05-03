import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
const context = useContext(ThemeContext)

if (context === undefined) {
    throw new Error("useThme() must be used inside a ThemeProvider")
}



return context

}