import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import "./style.css";
import logo from "../../assets/logo.png";
import korm from "../../assets/korm.png";

export const Comparison = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/analysis/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            vendor_code: "1111",
            user: {
              username: "username"
            }
          })
        });
        const responseData = await response.json();
        setData(responseData);
        console.log("responseData:", responseData);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchData();
  }, []);

  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="comparison">
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          {data && data.result.parsed.slice(1).map((item, index) => (
            <div key={index} className="element">
              <div className="text-wrapper-2">Продавец: {item.store}</div>
              <div className="text-wrapper-3">{item.name}</div>
              <div className="text-wrapper-4">Цена: {item.price}</div>
              <div className="desc-analog">Описание: {item.desc}</div>
            </div>
          ))}
          <div className="text-wrapper-5">Аналоги</div>
        </div>
        <div className="main-logo">
            <img
                src={logo}
                alt="valta"
            />
        </div>
        <a className="text-wrapper-6" href="https://valta.ru/" rel="noopener noreferrer" target="_blank">
          Основной сайт
        </a>
        <ButtonsMenu button="normal" className="buttons-menu-normal-history" text="История сравнений" />
        <p className="p">Все права защищены АО «Валта Пет Продактс», 2014 - 2024</p>
        <Buttons onClick={onBackClick} button="normal" className="buttons-normal-back" text="Назад" />
        <div className="text-wrapper-7">Валта</div>
        {data && (
          <>
            <div className="text-wrapper-8">{data.result.parsed.find(item => item.store === 'valta').name}</div>
            <div className="text-wrapper-9">Цена: {data.result.parsed.find(item => item.store === 'valta').price}</div>
            <div className="desc-valta">Описание: {data.result.parsed.find(item => item.store === 'valta').desc}</div>
          </>
        )}
        <div className="text-wrapper-11">Артикул: 70081283</div>
        <div className="korm">
          <img
              src={korm}
              alt="korm"
          />
        </div>
      </div>
    </div>
  );
};
