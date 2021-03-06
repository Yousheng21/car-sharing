import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../../common/Burger-menu/Burger-menu";
import NavBar from "../../common/NavBar/NavBar";
import SideBar from "../../common/SideBar/SideBar";
import { nextStep } from "../../../actions/app";
import "./orderLayout.scss";

const OrderLayout = ({
  children,
  path,
  step,
  text,
  page,
  arrayValid,
  priceValid,
}) => {
  const [btnIsDisabled, setBtnIsDisabled] = useState(false);

  useEffect(() => {
    if (arrayValid) {
      setBtnIsDisabled(
        arrayValid.some((item) => {
          return !item;
        })
      );
    }
  }, [arrayValid]);
  return (
    <div className="location-page">
      <BurgerMenu />
      <NavBar page={page} arrayValid={arrayValid} />
      {children}
      <SideBar priceValid={priceValid}>
        <Link className="button" to={`/car-sharing/order/${path}`}>
          <button
            type="button"
            onClick={() => nextStep(step)}
            className="sideBar-button sideBar-child"
            disabled={btnIsDisabled}
          >
            {text}
          </button>
        </Link>
      </SideBar>
    </div>
  );
};

export default OrderLayout;
