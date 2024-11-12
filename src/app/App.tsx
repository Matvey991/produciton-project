import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";
import { AppRouter } from "./Provider/router";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./Provider/ThemeProvider";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
