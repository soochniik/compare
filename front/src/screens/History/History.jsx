import React from "react";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenuNormal } from "../../components/ButtonsMenuNormal";
import "./style.css";

export const History = () => {
    return(
           <div className = "history">
                <div className="div-2">
                    <div className="overlap-group">
                        <div className="ellipse" />
                        <div className="product">
                            <img className="image" alt="Image" src="image.png" />
                            <p className="monge-vetsolution">
                                Ветеринарная диета Monge VetSolution <br />
                                Dog Diabetic Диабетик для собак при <br />
                                сахарном диабете 12 кг
                            </p>
                            <div className="text-wrapper-2">31.05.2024</div>
                            <img className="line" alt="Line" src="line-1.svg" />
                        </div>
                        <header className="header">
                            <div className="text-wrapper-3">История сравнений</div>
                            <div className="text-wrapper-4">Название товара</div>
                            <div className="text-wrapper-5">Дата сравнения</div>
                            <img className="img" alt="Line" src="line-3.svg" />
                        </header>
                        <div className="product-2">
                            <div className="text-wrapper-2">31.05.2024</div>
                            <div className="text-wrapper-6">Супер кот</div>
                            <img className="image-2" alt="Image" src="image-2.png" />
                            <img className="line" alt="Line" src="line-2.svg" />
                        </div>
                    </div>
                    <img className="logo" alt="Logo" src="logo.png" />
                    <a className="text-wrapper-7" href="https://valta.ru/" rel="noopener noreferrer" target="_blank">
                        Основной сайт
                    </a>
                    <ButtonsMenuNormal className="buttons-menu-normal-history" />
                    <Buttons button="normal" className="buttons-normal-back" text=" Назад" />
                    <p className="p">Все права защищены АО "Валта Пет Продактс", 2014 - 2024</p>
                </div>
           </div>
    );
};
