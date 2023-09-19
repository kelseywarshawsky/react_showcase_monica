import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
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
import { Box } from "@mui/material";

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
  const routeMatch = useRouteMatch(["/tictactoe", "/todo", "/filterableproducttable"]);
  const currentTab = routeMatch?.pattern?.path;

  return (
   <Tabs value={currentTab}>
      <Tab
        label="Tic Tac Toe"
        value="/tictactoe"
        to="/tictactoe"
        component={Link}
      />
      <Tab 
      label="To Do" 
      value="/todo" 
      to="/todo" 
      component={Link} 
      />
      <Tab 
        label="Filterable Product Table" 
        value="/filterableproducttable" 
        to="/filterableproducttable" 
        component={Link} 
        />

    </Tabs>
    
  );
}



export default function TabsRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/filterableproducttable" element={<FilterableProductTable />} />
        {/* <Route path="/Shopping List" element={<App />} /> */}
      </Routes>
      <CenteredTabs />
    </BrowserRouter>
  );
}
