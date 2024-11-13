import { Navbar } from "widgets/Navbar";
import "./styles/index.scss";
import { AppRouter } from "./Provider/router";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./Provider/ThemeProvider";
import { Sidebar } from "widgets/Sidebar/Sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
