import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import { Input } from "../../components/Input";
import "./style.css";
import logo from "../../assets/logo.png";


export const LogIn = () => {
  const [enteredText, setEnteredText] = useState("");

  const handleInputTextChange = (text) => {
    setEnteredText(text);
  };

  const onLoginClick = () => {
    setEnteredText(enteredText);
    navigate(-1);
  };

  const navigate = useNavigate();

  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="log-in">
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          <Buttons onClick={onLoginClick} button="normal" className="buttons-normal-login" text="Войти" />
          <Input className="input-active-2-email" input="active-2" text="E-mail или телефон" onInputChange={handleInputTextChange} type="text" />
          <Input className="input-active-2-password" input="active-2" text="Пароль" onInputChange={handleInputTextChange} type="password" />
          <div className="text-wrapper-3">Личный кабинет</div>
        </div>
        <div className="main-logo">
            <img
                src={logo}
                alt="valta"
            />
        </div>
        <p className="p">Все права защищены АО «Валта Пет Продактс», 2014 - 2024</p>
        <Buttons onClick={onBackClick} button="normal" className="buttons-normal-back" text="Назад" />
        <a className="text-wrapper-4" href="https://valta.ru/" rel="noopener noreferrer" target="_blank">
          Основной сайт
        </a>
        <ButtonsMenu button="normal" className="buttons-menu-normal-history" text="История сравнений" />
      </div>
    </div>
  );
};
