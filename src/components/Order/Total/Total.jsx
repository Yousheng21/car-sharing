import React from "react";
import { useSelector } from "react-redux";
import "./total.scss";

import { API_URL } from "../../../reducers/data/dataServer";
import OrderLayout from "../../layouts/OrderLayout/OrderLayout";

const Total = ({ nextStep, page }) => {
  const car = useSelector((state) => state.app.currentCar);
  const order = useSelector((state) => state.app.currentOrder);

  import React, {useEffect, useState} from "react";
  import "./total.scss";

  import {Link} from "react-router-dom";
  import {useSelector, useDispatch} from "react-redux";
  import InfoOrderLayout from "../../layouts/InfoOrderLayout";
  import BurgerMenu from "../../common/Burger-menu/Burger-menu";
  import NavBar from "../../common/NavBar/NavBar";
  import SideBar from "../../common/SideBar/SideBar";
  import Modal from "../../../utils/Modal/Modal";
  import {setOrder} from "../../../actions/order";
  import setOrderComplete from "../../../actions/confirmOrder";
  import {orderCompleteId} from "../../../reducers/data/dataOrder";

  const Total = ({page}) => {
    const dispatch = useDispatch();
    const [activeModal, setActiveModal] = useState(false);
    const orderId = useSelector((state) => state.app.orderId);
    const order = useSelector((state) => state.app.currentOrder);

    useEffect(() => {
      dispatch(setOrder);
    }, [order]);
    return (
        <div className="location-page">
          <BurgerMenu/>
          <NavBar page={page}/>
          <main className="total-content">
            <section className="total-content-info">
              <h1>{car.name}</h1>
              <span className="number">{car.number}</span>
              <section className="text">
                <span>Топливо</span> {order.cistern.value}
              </section>
              <section className="text">
                <span>Доступна c</span> {order.delay.from}
              </section>
            </section>
            <img src={API_URL + car.thumbnail.path} alt={car.name}/>
          </main>
          <SideBar>
            <button
                type="button"
                onClick={() => {
                  setActiveModal(true);
                }}
                className="button sideBar-button sideBar-child"
            >
              Заказать
            </button>
          </SideBar>
          <Modal active={activeModal} total>
            <h1 className="title">Подтвердить заказ</h1>
            <Link className="button" to={`/car-sharing/order/confirm/${orderId}`}>
              <button
                  type="button"
                  className="success"
                  onClick={() => dispatch(setOrderComplete(orderId, orderCompleteId))}
              >
                Подтвердить
              </button>
            </Link>
            <button
                type="button"
                className="canceled"
                onClick={() => setActiveModal(false)}
            >
              Вернуться
            </button>
          </Modal>
        </div>
    );
  };
};
export default Total;
