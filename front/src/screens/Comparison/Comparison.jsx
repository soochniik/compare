import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import "./style.css";
import logo from "../../assets/logo.png";

export const Comparison = ({ token }) => {
  const [data, setData] = useState(null);
  const [vendor, setVendor] = useState(null); // Состояние для хранения значения vendor
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const vendorCode = queryParams.get("comparison");
    if (vendorCode) {
        setVendor(vendorCode); // Обновляем значение vendor

        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/analysis/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        vendor_code: vendorCode.toString(),
                        token: token,
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
    }
  }, [location.search, token]);

  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="comparison">
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          {data && data.slice(1).map((item, index) => (
            item.store.name !== "Valta" &&
            <div key={index} className="element">
              <div className="text-wrapper-2">Продавец: {item.store.name}</div>
              <div className="text-wrapper-3">{item.name}</div>
              <div className="text-wrapper-4">Цена: {item.price}</div>
              <div className="desc-analog">Описание: {item.text}</div>
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
        {data && data.find(item => item.store.name === 'Valta') && (
          <>
            <div className="text-wrapper-8">{data.find(item => item.store.name === 'Valta').name}</div>
            <div className="text-wrapper-9">Цена: {data.find(item => item.store.name === 'Valta').price}</div>
            <div className="desc-valta">Описание: {data.find(item => item.store.name === 'Valta').text}</div>
          </>
        )}
        <div className="text-wrapper-11">Артикул: {vendor}</div> {/* Используем значение vendor здесь */}
      </div>
    </div>
  );
};

export default Comparison;
