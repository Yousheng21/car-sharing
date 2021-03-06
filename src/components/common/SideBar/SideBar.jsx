import React from "react";
import "./sideBar.scss";
import { useSelector } from "react-redux";
import Additional from "./Additional";

const SideBar = ({ children, priceValid }) => {
  const parameters = useSelector((state) => state.app.currentOrder);
  const price = useSelector((state) => state.app.price);
  return (
    <aside className="sideBar">
      <header className="sideBar-info-title sideBar-child">
        <h1>Ваш заказ:</h1>
      </header>
      <main className="sideBar-parameters sideBar-child">
        {Object.keys(parameters).map((item) =>
          item === "additional" ? (
            <Additional key={parameters[item]} arr={parameters[item]} />
          ) : (
            parameters[item].value && (
              <section
                key={parameters[item].text}
                className="sideBar-info-content"
              >
                <span className="place">{parameters[item].text}</span>
                <span className="dots">......................</span>
                <div className="address">
                  <span>
                    {item === "place"
                      ? `${parameters[item].value.city ?? ""},\n${
                          parameters[item].value.street ?? ""
                        }`
                      : parameters[item].value}
                  </span>
                </div>
              </section>
            )
          )
        )}
      </main>

      <section className="sideBar-info-price sideBar-child">
        Цена
        <span>
          {price.value ? (
            <span>
              {` ${price.value}p`}
              {!priceValid && priceValid !== undefined ? (
                <div className="error">
                  Выберите стоимость от {price.min}р до {price.max}р
                </div>
              ) : (
                ""
              )}
            </span>
          ) : (
            ` от ${price.min} p до ${price.max} p`
          )}
        </span>
      </section>
      <footer className="sideBar-info-price sideBar-child">
        <text>
          Цена от <span>{price.min}</span> до <span>{price.max}</span>
        </text>
      </footer>
      {children}
    </aside>
  );
};

export default SideBar;
