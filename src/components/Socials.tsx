import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"
import { Social as SocialType } from "../Utils/Types"

const Socials = ({socials}:{socials: SocialType[]}) => {
    const [theme,] = useContext(ThemeContext);

    return (
        <section id="socials" className="col-span-1 row-span-3">
            {socials.map((social)=>(
            <a href={social.link} className="card socials_item about" target="_blank" key={social.id}>
                <img className="icon" src={social.icon?.[theme].url} alt="github" />
            </a>
            ))}
        </section>
    )
}

export default Socials