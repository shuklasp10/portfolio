import { useContext, useEffect } from "react"
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
import { toTitleCase } from "./Utils/helper";
import { useUserQuery } from "./api/queries";


function App() {
  const { data: user, isLoading, isError, error } = useUserQuery()
  const [theme,] = useContext(ThemeContext);

  useEffect(() => {
    if (user) {
      document.title = 'Portfolio: ' + toTitleCase(user.name)
      const favicon = document.getElementById('favicon') as HTMLLinkElement;
      if (favicon) {
        favicon.href = user.photo
      }
    }
  }, [user])

  return (
    <div className={`app ${theme}`}>
      <Nav />
      {isLoading ?
        <div className="loader"></div> :
        isError || !user ?
          <center className="error">{`${error}. Please check your connection or try again.`}</center> :
          <main className="grid">
            <Profile user={user} />
            <Carousel user={user} />
            <Resume user={user} />
            <Theme />
            <Socials user={user} />
            <Map user={user} />
            <Experience user={user} />
            {user.projects.map((project) => (
              <Project project={project} key={project._id} />
            ))}
          </main>
      }
    </div>
  )
}

export default App
