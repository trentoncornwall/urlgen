import { Switch, Link, Route, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Nav({ routes }) {
  let location = useLocation();

  return (
    <NavDiv>
      <Logo src="./images/Logo_horizontal_RGB.png" />
      <NavList>
        <Link className={location.pathname === "/" ? "Active" : "Link"} to="/">
          <NavItem>Date & Time Link</NavItem>
        </Link>
        <Link
          className={location.pathname === "/multi" ? "Active" : "Link"}
          to="/multi"
        >
          <NavItem>Multi Restaurant Link</NavItem>
        </Link>
      </NavList>

      <Switch>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} />
        ))}
      </Switch>
    </NavDiv>
  );
}

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;

  .Link {
    text-decoration: none;
    &:visited {
      color: #da3743;
    }
  }

  .Active {
    text-decoration: none;
    li {
      color: #da3743;
    }
  }
`;

const NavItem = styled.li`
  color: black;
  padding: 1em;
  :hover {
    background-color: #f6f6f6;
  }
`;

const Logo = styled.img`
  margin: 2em;
  width: 170px;
`;

const NavDiv = styled.div`
  margin: 0px;
  height: 100vh;
  padding: 10px;
  width: 250px;
`;
