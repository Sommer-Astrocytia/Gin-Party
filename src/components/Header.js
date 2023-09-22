import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Astrocytia from "../assets/images/astrocytia.png";
import Dims from "../assets/icons/dims.png";
/* import { Search } from "./Search"; */
import { TopBar } from "./Topbar";

export const Header = () => {
  const [pageTitle, setPageTitle] = useState("");
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    setPageTitle(document.title);
    console.log(document.title);
  }, []);

  return (
    <div>
      <TopBar />
      <header>
        <div className="header-div">
          <img
            className="logo"
            src={Astrocytia}
            alt="logo"
            onClick={goToHome}
          />
          <img className="dims" src={Dims} alt="icon" />
        </div>
        {/*    <Search /> */}
      </header>
    </div>
  );
};
