import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import type { ThemedIcon } from "../Utils/Types";

const Theme = ({themeIcon}:{themeIcon: ThemedIcon}) => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <section
      id="theme"
      className="card col-span-1 row-span-2"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      <img
        className="icon"
        src={theme == "dark" ? themeIcon.dark.url : themeIcon.light.url}
        alt="theme"
      />
    </section>
  );
};

export default Theme;
