import { useGlobalContext } from "./GlobalContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";
const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleTheme}>
        {isDarkTheme ? (
          <MdDarkMode className="toggle-icon" />
        ) : (
          <MdLightMode className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
