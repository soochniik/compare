import React from "react";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import "./style.css";

export const Comparison = () => {
  return (
    <div className="comparison">
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          <div className="element">
            <div className="text-wrapper-2">Название товара</div>
            <div className="text-wrapper-3">Цена</div>
            <div className="text-wrapper-4">Скидка</div>
          </div>
          <div className="element-2">
            <div className="text-wrapper-2">Название товара</div>
            <div className="text-wrapper-3">Цена</div>
            <div className="text-wrapper-4">Скидка</div>
          </div>
          <div className="element-3">
            <div className="text-wrapper-2">Название товара</div>
            <div className="text-wrapper-3">Цена</div>
            <div className="text-wrapper-4">Скидка</div>
          </div>
          <div className="text-wrapper-5">Аналоги</div>
        </div>
        <img className="logo" alt="Logo" src="logo.png" />
        <a className="text-wrapper-6" href="https://valta.ru/" rel="noopener noreferrer" target="_blank">
          Основной сайт
        </a>
        <ButtonsMenu button="normal" className="buttons-menu-normal-history" text="История сравнений" />
        <p className="p">Все права защищены АО «Валта Пет Продактс», 2014 - 2024</p>
        <Buttons button="normal" className="buttons-normal-back" text="Назад" />
        <div className="text-wrapper-7">Валта</div>
        <p className="text-wrapper-8">
          Ветеринарная диета Monge VetSolution <br />
          Dog Diabetic Диабетик для собак при <br />
          сахарном диабете 12 кг
        </p>
        <div className="text-wrapper-9">Цена: 10 384 р.</div>
        <div className="text-wrapper-10">Скидка: 0 р.</div>
        <div className="element-4">
          <div className="text-wrapper-2">Название товара</div>
          <div className="text-wrapper-3">Цена</div>
          <div className="text-wrapper-4">Скидка</div>
        </div>
        <div className="text-wrapper-11">Артикул: 70081283</div>
        <img className="image" alt="Image" src="image.png" />
      </div>
    </div>
  );
};