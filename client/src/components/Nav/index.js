import React, {useState, Fragment} from "react";
import LoginForm from "../LoginForm";

function Nav() {
  const [loginExpanded, setLoginExpanded] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      {!loginExpanded && <button onClick={ () => setLoginExpanded(true) }>Login</button>}
      {loginExpanded && 
       (() => 
        <Fragment>
          <LoginForm className="top-menu-login"/>
          <button onClick={ () => setLoginExpanded(false) }>X</button>
        </Fragment>
       )()
      }
    </nav>
  );
}

export default Nav;
