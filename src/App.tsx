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
import { useUserQuery } from "./services/getData";


function App() {
  const { data, isLoading, isError } = useUserQuery()
  const [theme,] = useContext(ThemeContext);

  useEffect(() => {
    if (data) {
      document.title = data.siteData.name;
      const favicon = document.getElementById('favicon') as HTMLLinkElement;
        favicon.href = data.siteData.favicon.url
    }
  }, [data])

  return (
    <div className={`app ${theme}`}>
      <Nav />
      {isLoading ?
        <div className="loader"></div> :
        isError || !data ?
          <center className="error">{'Error in fetching data.'}</center> :
          <main className="grid">
            <Profile personal={data.personal} />
            <Carousel skills={data.skills} />
            <Resume resume={data.resume} updatedAt = {data.updatedAt} />
            <Theme themeIcon={data.themeIcon}/>
            <Socials socials={data.socials} />
            <Map data={data} />
            <Experience data={data} />
            {data.projects.map((project) => (
              <Project project={project} key={project.id} />
            ))}
          </main>
      }
    </div>
  )
}

export default App
