import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import TicTacToe from "./TicTacToe";
import Todo from "./Todo";
import FilterableProductTable from "./Shoppinglist";
import Weather from "./components/Weather";
// import PlainSearchBar from './components/PlainSearchBar';
import ArtSearch from "./components/ArtSearch";
import FixedContainer from "./components/Login";
import Dashboard from "./components/Dashboard";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { createTheme } from "@mui/material";
import {
  green,
  purple,
  blue,
  pink,
  yellow,
  orange,
} from "@mui/material/colors";

function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={["/drafts"]} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function CenteredTabs() {
  const routeMatch = useRouteMatch([
    "/tictactoe",
    "/todo",
    "/filterableproducttable",
    "/weather",
    "/art",
    "/login",
    "/dashboard",
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab
        label="Tic Tac Toe"
        value="/tictactoe"
        to="/tictactoe"
        component={Link}
      />
      <Tab label="To Do" value="/todo" to="/todo" component={Link} />
      <Tab
        label="Filterable Product Table"
        value="/filterableproducttable"
        to="/filterableproducttable"
        component={Link}
      />
      <Tab label="Weather" value="/weather" to="/weather" component={Link} />
      <Tab label="Art" value="/art" to="/art" component={Link} />
      <Tab label="Login" value="/login" to="/login" component={Link} />

      <Tab
        label="Dashboard"
        value="/dashboard"
        to="/dashboard"
        component={Link}
      />
    </Tabs>
  );
}

export default function TabsRouter() {
  const theme = createTheme({
    palette: {
      primary: {
        main: pink[500],
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/todo" element={<Todo />} />
            <Route
              path="/filterableproducttable"
              element={<FilterableProductTable />}
            />
            <Route path="/weather" element={<Weather />} />
            <Route path="/art" element={<ArtSearch />} />
            <Route path="/login" element={<FixedContainer />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <CenteredTabs />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
