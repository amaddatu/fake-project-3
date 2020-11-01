import React, {useState, Fragment, useContext} from "react";
import UserContext from "../../utils/UserContext";
import LoginForm from "../LoginForm";

function Nav() {
  const [loginExpanded, setLoginExpanded] = useState(false);
  const {email, loggedIn} = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      { (() => {
        if(loggedIn){
          return <p>{email}</p>;
        }
        else{
          if(!loginExpanded){
            return <button onClick={ () => setLoginExpanded(true) }>Login</button>;
          }
          else{
            return (
              <Fragment>
                <LoginForm className="top-menu-login"/>
                <button onClick={ () => setLoginExpanded(false) }>X</button>
              </Fragment>
            )
          } 
        }
      })()}
      
    </nav>
  );
}

export default Nav;
