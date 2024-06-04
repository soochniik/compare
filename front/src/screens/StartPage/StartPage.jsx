import React from "react";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import { Input } from "../../components/Input";
import "./style.css";
import logo from "../../assets/logo.png";

export const StartPage = () => {
  return (
    <div className="start-page">
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="text-wrapper-3">Сравнить товары с аналогами</div>
          <div className="instuction">
            <p className="p">
              <span className="span">
                1. Для сравнения продуктов с аналогами введите в поле ниже <br/>
                артикул товара с нашего{" "}
              </span>
              <a href="https://valta.ru/catalog/" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-4">сайта</span>
              </a>
              <span className="span">. Он расположен в карточке товара.</span>
            </p>
            <p className="text-wrapper-5">2. После ввода артикула нажмите на кнопку “Сравнить”.</p>
            <p className="text-wrapper-6">
              3. После нажатия вы увидите результаты сравнения наших товаров
              <br />
              с аналогами по цене и актуальные акции и предложения.
            </p>
          </div>
          <Buttons button="normal" className="buttons-normal-comparison" text="Сравнить" />
          <Input className="input-active-comparison" input="active" text="" />
        </div>
        <div className="main-logo">
          <img
              src={logo}
              alt="valta"
          />
        </div>
        <a className="text-wrapper-7" href="https://valta.ru/" rel="noopener noreferrer" target="_blank">
          Основной сайт
        </a>
        <p className="text-wrapper-8">Все права защищены АО «Валта Пет Продактс», 2014 - 2024</p>
        <Buttons button="normal" className="buttons-normal-lk" text="Личный кабинет" />
        <ButtonsMenu button="normal" className="buttons-menu-normal-history" text="История сравнений" />
      </div>
    </div>
  );
};
