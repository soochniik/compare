import React from "react";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import { Input } from "../../components/Input";
import "./style.css";

export const LogIn = () => {
  return (
    <div className="log-in">
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          <Buttons button="normal" className="buttons-normal-login" text="Войти" />
          <Input className="input-email" input="active-2" text="E-mail или телефон" />
          <Input className="input-active" input="active-2" text="Пароль" />
          <div className="text-wrapper-3">Личный кабинет</div>
        </div>
        <img className="logo" alt="Logo" src="logo.png" />
        <p className="p">Все права защищены АО «Валта Пет Продактс», 2014 - 2024</p>
        <Buttons button="normal" className="buttons-normal-back" text="Назад" />
        <a className="text-wrapper-4" href="https://valta.ru/" rel="noopener noreferrer" target="_blank">
          Основной сайт
        </a>
        <ButtonsMenu button="normal" className="buttons-menu-normal-history" text="История сравнений" />
      </div>
    </div>
  );
};
