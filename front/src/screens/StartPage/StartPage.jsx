import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import { Input } from "../../components/Input";
import "./style.css";
import logo from "../../assets/logo.png";

export const StartPage = ({ token, setToken }) => {
  const [enteredText, setEnteredText] = useState("");

  const handleInputTextChange = (text) => {
    setEnteredText(text);
  };

  const navigate = useNavigate();

  const onLoginClick = () => {
    navigate("/login");
  };

  const onLogoutClick = () => {
    setToken("");
  };

  const onCompareClick = () => {
    if (/^[a-zA-Z0-9]{6,}$/.test(enteredText)) {
      setEnteredText(enteredText);
      navigate(`/comparison?comparison=${enteredText}`);
    }
    else {
      alert("Артикул должен содержать не менее 6 латинских символов или цифр!");
    }
  };

  const onHistoryClick = () => {
    navigate("/history");
  };

  const onGraphClick = () => {
    navigate("/graphs");
  };
  
  return (
    <div className="start-page">
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="text-wrapper-3">Сравнить товары с аналогами</div>
          <div className="instuction">
            <p className="p">
              <span className="span">
                2. Для сравнения продуктов с аналогами введите в поле ниже <br/>
                артикул товара с нашего{" "}
              </span>
              <a href="https://valta.ru/catalog/" rel="noopener noreferrer" target="_blank">
                <span className="text-wrapper-4">сайта</span>
              </a>
              <span className="span">. Он расположен в карточке товара.</span>
            </p>
            <p className="text-wrapper-9"> 1. Для начала сравнения, пожалуйста, зайдите в свой личный
                <br/>
                кабинет - без него сравнение невозможно.
            </p>
            <p className="text-wrapper-5">3. После ввода артикула нажмите на кнопку “Сравнить”.</p>
            <p className="text-wrapper-6">
              4. После нажатия вы увидите результаты сравнения наших товаров
              <br />
              с аналогами по цене и актуальные акции и предложения.
            </p>
          </div>
          <Input
            className="input-active-comparison"
            input="active"
            text=""
            onInputChange={handleInputTextChange}
            type="text"
            value={enteredText}
          />
          <Buttons onClick={onCompareClick} button="normal" className="buttons-normal-comparison" text="Сравнить" />
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
        {token ? (
          <Buttons onClick={onLogoutClick} button="normal" className="buttons-normal-lk" text="Выйти" />
        ) : (
          <Buttons onClick={onLoginClick} button="normal" className="buttons-normal-lk" text="Личный кабинет" />
        )}
        <ButtonsMenu onClick={onHistoryClick} button="normal" className="buttons-menu-normal-history" text="История сравнений" />
        <ButtonsMenu onClick={onGraphClick} button="normal" className="buttons-menu-normal-graph" text="Мониторинг цен" />
      </div>
    </div>
  );
};
