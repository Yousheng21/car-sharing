import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

import Vector from "../../../images/vector.svg";

import "./navBar.scss";

const tabs = [
  { text: "Местоположение", path: "" },
  { text: "Модель", path: "model" },
  { text: "Дополнительно", path: "extra" },
  { text: "Итого", path: "total" },
];

const NavBar = ({ page, confirm }) => {
  const currStep = useSelector((state) => state.app.currentStep);

  return (
    <nav className="navBar">
      <header className="navBar-header">
        <h1 className="header-title">Need for drive</h1>
        <section className="sideBar-map">
          <span className="header-map">
            <img
              src="https://img.icons8.com/plumpy/24/000000/google-maps-new.png"
              alt="google-map"
            />
            Ульяновск
          </span>
        </section>
      </header>

      <section className="navBar-nav">
        {!confirm ? (
          tabs.map((item, index) => (
            <span
              className={classNames({
                active: index === page,
                complete: index < currStep,
              })}
              key={item.text}
            >
              {index ? <Vector /> : ""}
              <Link
                className={classNames({
                  disabled: index > currStep,
                })}
                to={`/car-sharing/order/${item.path}`}
              >
                {item.text}
              </Link>
            </span>
          ))
        ) : (
          <h1>Заказ номер RU{confirm}</h1>
        )}
      </section>
    </nav>
  );
};

export default NavBar;
