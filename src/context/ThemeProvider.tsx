import { ReactNode, createContext, useState } from "react"
import { ThemeType, ThemeContextType } from "../Utils/Types"

export const ThemeContext = createContext<ThemeContextType>(['light',()=>{}]);

const ThemeProvider = ({children}:{children:ReactNode}) => {
    const [theme, setTheme] = useState<ThemeType>('light')
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;