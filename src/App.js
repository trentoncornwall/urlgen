import Nav from "./components/Nav";
import Url from "./pages/Url";
import MutliUrl from "./pages/MultiUrl";
import Exp from "./pages/Exp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Url />,
  },
  {
    path: "/multi",
    exact: true,
    main: () => <MutliUrl />,
  },
  {
    path: "/exp",
    exact: true,
    main: () => <Exp />,
  },
];

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Nav routes={routes} />

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
