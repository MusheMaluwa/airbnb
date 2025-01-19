import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Avatar } from "@mui/material";
import { openModal } from "../../action/ModalAction";
import { logout } from "../../action/UserAction"; // Import your logout action
import Login from "../Login";
import Signup from "../Signup";
import "./Header.css";
import SearchPage from "../SearchPage";
import AdminAddHotel from "../AdminAddHotel";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // State for toggling additional components
  const [showAdditionalComponent, setShowAdditionalComponent] = useState(false);
  const [showAdditionalHost, setShowAdditionalHost] = useState(false);

  const handleToggleSearch = () => {
    setShowAdditionalComponent(!showAdditionalComponent); // Toggle visibility
  };

  const handleToggleHost = () => {
    setShowAdditionalHost(!showAdditionalHost); // Toggle visibility
  };

  const openModalHandle = (modalType) => {
    if (modalType ==="login") {
      dispatch(openModal("open", <Login />));
    } else if (modalType === "signup") {
      dispatch(openModal("open", <Signup />));
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  console.log("Redux state userLogin:", useSelector((state) => state.userLogin));


  return (
    <div className="header-container">
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png"
          className="header_logo"
          alt="logo"
        />
        <div onClick={handleToggleSearch} className="header_center">
          <input type="text" placeholder="Start your search..." />
          <SearchIcon />
        </div>
        <div className="header_right">
          <p onClick={handleToggleHost}>Become a host</p>
          <LanguageIcon />
          <div className="dropdown">
            <DensityMediumIcon className="dropbtn" />
            <div className="dropdown-content">
              {userInfo ? (
                <>
                  <span>Account</span>
                  <span onClick={handleLogout}>Log out</span> {/* Add onClick */}
                </>
              ) : (
                <>
                  <span onClick={() => openModalHandle("signup")}>Sign Up</span>
                  <span onClick={() => openModalHandle("login")}>Log in</span>
                </>
              )}
              <span>Help</span>
            </div>
          </div>
          <Avatar src={userInfo ? userInfo.avatar : "default-avatar-url"} />
        </div>
      </div>

      {/* Additional Components */}
      {showAdditionalComponent && (
        <div className="additional-component">
          <SearchPage />
        </div>
      )}
      {showAdditionalHost && (
        <div className="additional-component">
          <AdminAddHotel />
        </div>
      )}
    </div>
  );
};

export default Header;
