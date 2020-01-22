import React from "react";
import "./splash.scss";
import { Route, Link } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Splash = () => {
  return (
    <>
      <Route path="/" render={props => <Header {...props} />} />

      <div className="splash-page">
        <div className="logo">
          <Link to="/">
            <img src="100_Million_Title-500.png" alt="100 Million Project"/>
          </Link>
        </div>

        {/* <div className="mobile-text">
          <p>
            100 Million people didn't vote in the past U.S. presidential
            election
          </p>
          <p>
            We traveled from state to state to meet them and understand why they
            choose not to participate
          </p>
        </div> */}
        <div className="upper">
          <p>
            Inaction is the greatest threat to democracy. In the 2016 election,
            over 100 million people did not vote.
          </p>
          <p>It's time to find out why.</p>
         
        </div>
        
        <div className="lower"> 
        <p>Coming Soon.</p>
        
        <form>
          <input type="text" placeholder="Email"></input>
          <input type="submit" value="NOTIFY ME"></input>
        </form>
         <p className="hash-tag">#the100million</p>
        <div className="media-icons">

          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Splash;
