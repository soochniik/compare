import React from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import "./style.css";
import logo from "../../assets/logo.png";

export const History = () => {
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate(-1);
    };
    return(
        <div className = "history">
            <div className="div-2">
                <div className="overlap-group">
                    <div className="ellipse" />
                    <div className="product">
                        <p className="monge-vetsolution">
                            1. Ветеринарная диета Monge VetSolution
                            Dog Diabetic Диабетик для собак при
                            сахарном диабете 12 кг
                        </p>
                    </div>
                    <header className="header">
                        <div className="text-wrapper-3">История сравнений</div>
                    </header>
                    <div className="product-2">
                        2. Просто космос какой я тупой
                    </div>
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
                <ButtonsMenu button="normal" className="buttons-menu-normal-history" text="История сравнений" />
                <Buttons onClick={onBackClick} button="normal" className="buttons-normal-back" text="Назад" />
                <p className="p">Все права защищены АО «Валта Пет Продактс», 2014 - 2024</p>
            </div>
        </div>
    );
};
