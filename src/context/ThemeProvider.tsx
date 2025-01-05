import { ReactNode, createContext, useState } from "react"
import { ThemeType, ThemeContextType } from "../Utils/Types"

export const ThemeContext = createContext<ThemeContextType>(['light', () => { }]);

const getTheme = (): ThemeType => {
    const sessionTheme = sessionStorage.getItem('theme') as ThemeType | null
    const systemTheme: ThemeType = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    return sessionTheme ? sessionTheme : systemTheme;
}

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>(getTheme())
    sessionStorage.setItem('theme', theme)
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;