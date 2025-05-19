import { useEffect, useState } from "react";
import content from "./content";
import style from "./main.module.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      <div className={style.themeToggle}>
        <label className={style.switch}>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
          />
          <span className={style.slider}></span>
        </label>
      </div>

      <main>{content}</main>
    </>
  );
};

export default App;
