import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { Input } from "../../components/Input";
import "./style.css";
import logo from "../../assets/logo.png";


export const LogIn = ({ setToken }) => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserChange = (event) => {
    setUser(event);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event); 
  };

  const handleLoginClick = async () => {
    try {
      const response = await fetch('http://10.10.208.11:8000/login/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        })
      });

      if (response.ok) {
        const data = await response.json();
        // Сохраняем токен в состоянии родительского компонента
        setToken(data.token);
        navigate("/"); // Перенаправление на защищенную страницу
      } else {
        console.error("Ошибка входа:", response.status);
      }
    } catch (error) {
      console.error("Ошибка входа:", error);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="log-in">
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          <Buttons onClick={handleLoginClick} button="normal" className="buttons-normal-login" text="Войти" />
          <Input
            className="input-active-2-email"
            input="active-2"
            text="E-mail или телефон"
            value={username}
            onInputChange={handleUserChange}
            type="text"
          />
          <Input
            className="input-active-2-password"
            input="active-2"
            text="Пароль"
            value={password}
            onInputChange={handlePasswordChange}
            type="password"
          />
          <div className="text-wrapper-3">Личный кабинет</div>
        </div>
        <div className="main-logo">
            <img
                src={logo}
                alt="valta"
            />
        </div>
        <p className="p">Все права защищены АО «Валта Пет Продактс», 2014 - 2024</p>
        <Buttons onClick={handleBackClick} button="normal" className="buttons-normal-back" text="Назад" />
        <a className="text-wrapper-4" href="https://valta.ru/" rel="noopener noreferrer" target="_blank">
          Основной сайт
        </a>
        {/*<ButtonsMenu button="normal" className="buttons-menu-normal-history" text="История сравнений" />
        <ButtonsMenu button="normal" className="buttons-menu-normal-graph" text="Мониторинг цен" />*/}
      </div>
    </div>
  );
};

export default LogIn;
