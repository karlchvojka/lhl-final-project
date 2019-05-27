import React from "react";
import NavbarComp from "./home-nav-bar";
import HomeImage from "../../../assets/Home/Img.svg";
// test
export default () => {
  return (
    <main
      className="content-area container-fluid"
      style={{
        backgroundImage: `url(${HomeImage})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top"
      }}
    >
      <NavbarComp />
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col-5" style={{ paddingTop: "300px" }}>
              <h2>Easily split expenses and bills with your roommates</h2>
              <button
                className="btn btn-primary"
                style={{
                  height: "58px",
                  width: "270px",
                  borderRadius: "100px",
                  background: "linear-gradient(90deg, #FB6649 0%, #FB4E5B 100%"
                }}
              >
                Sign up
              </button>
            </div>
            <div className="col-7" />
          </div>
        </div>
      </div>
    </main>
  );
};
