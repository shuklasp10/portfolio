import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "./context/ThemeProvider"
import Nav from "./components/Nav";
import Profile from "./components/Profile";
import Carousel from "./components/Carousel";
import Resume from "./components/Resume";
import Theme from "./components/Theme";
import Socials from "./components/Socials";
import Map from "./components/Map";
import Experience from "./components/Experience";
import Project from "./components/Project";
import { User } from "./Utils/Types";
import { toTitleCase } from "./Utils/helper";

function App() {
  const [user, setUser] = useState<User | null>(null)
  const [theme,] = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://portfolio-shuklasp-backend.vercel.app/client')
      .then((res) => res.json())
      .then((data: User) => setUser(data))
      .catch((e) => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    if (user) {
      document.title = 'Portfolio: ' + toTitleCase(user.name)
      const favicon = document.getElementById('favicon') as HTMLLinkElement;
      if (favicon) {
        favicon.href = user.photo
      }
    }
  }, [])

  return (
    <div className={`app ${theme}`}>
      <Nav />
      {user ?
        <main className="grid">
          <Profile user={user} />
          <Carousel user={user} />
          <Resume user={user} />
          <Theme />
          <Socials user={user} />
          <Map user={user} />
          <Experience user={user} />
          {user.projects.map((project) => (
            <Project project={project} />
          ))}
        </main>:
        <div className="loader"></div>
      }
    </div>
  )
}

export default App
