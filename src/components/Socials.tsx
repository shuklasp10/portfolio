import { useContext } from "react"
import { git_dark, mail_dark, phone_dark } from "../assets/icons/socials-dark"
import { git_light, mail_light, phone_light } from "../assets/icons/socials-light"
import { ThemeContext } from "../context/ThemeProvider"
import { User } from "../Utils/Types"

const Socials = ({user}:{user: User}) => {
    const [theme,] = useContext(ThemeContext);
    const [git, mail, phone] = theme=='dark'?[git_dark, mail_dark, phone_dark]:[git_light, mail_light, phone_light]

    return (
        <section id="socials" className="col-span-1 row-span-3">
            <a href={user.socials.giturl} className="card socials_item about" target="_blank">
                <img className="icon" src={git} alt="github" />
            </a>
            <a href={`mailto:${user.socials.mail}`} className="card socials_item about">
                <img className="icon" src={mail} alt="mail" />
            </a>
            <a href={`tel:${user.socials.phone}`} className="card socials_item about" target="_blank">
                <img className="icon" src={phone} alt="phone" />
            </a>
        </section>
    )
}

export default Socials