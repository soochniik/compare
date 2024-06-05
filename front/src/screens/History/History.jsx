import React from "react";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import "./style.css";
import logo from "../../assets/logo.png";
import korm2 from "../../assets/korm2.png";
import line from "../../assets/Line1.png";

export const History = () => {
    return(
           <div className = "history">
                <div className="div-2">
                    <div className="overlap-group">
                        <div className="ellipse" />
                        <div className="product">
                            <div className="korm2">
                                <img
                                    src={korm2}
                                    alt="korm2"
                                />
                            </div>
                            <p className="monge-vetsolution">
                                Ветеринарная диета Monge VetSolution <br />
                                Dog Diabetic Диабетик для собак при <br />
                                сахарном диабете 12 кг
                            </p>
                            <div className="text-wrapper-2">31.05.2024</div>
                            <div className="line">
                                <img
                                    src={line}
                                    alt="line"
                                />
                            </div>
                        </div>
                        <header className="header">
                            <div className="text-wrapper-3">История сравнений</div>
                            <div className="text-wrapper-4">Название товара</div>
                            <div className="text-wrapper-5">Дата сравнения</div>
                        </header>
                        <div className="product-2">
                            <div className="text-wrapper-2">31.05.2024</div>
                            <div className="text-wrapper-6">Супер кот</div>
                            <div className="korm2">
                                <img
                                    src={korm2}
                                    alt="korm2"
                                />
                            </div>
                            <div className="line">
                                <img
                                    src={line}
                                    alt="line"
                                />
                            </div>
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
                    <Buttons button="normal" className="buttons-normal-back" text="Назад" />
                    <p className="p">Все права защищены АО "Валта Пет Продактс", 2014 - 2024</p>
                </div>
           </div>
    );
};
