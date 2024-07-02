import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import { Input } from "../../components/Input";
import "./style.css";
import logo from "../../assets/logo.png";

export const TwoProducts = ({ token }) => {
  const [vendoreCode1, setCode1] = useState("");
  const [vendoreCode2, setCode2] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleCode1Change = (event) => {
    setCode1(event);
  };

  const handleCode2Change = (event) => {
    setCode2(event);
  };

  const onHistoryClick = () => {
    navigate("/history");
  };

  const onCompareClick = () => {
    navigate("/");
  };

  const handleCompareClick = async () => {
    try {
      const response = await fetch('http://10.10.208.11:8000/two_products/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vendor_code_1: vendoreCode1,
          vendor_code_2: vendoreCode2,
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

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="twoproducts">
      <div className="div-2">
        <div className="overlap-group">
          <div className="ellipse" />
          <Buttons onClick={handleCompareClick} button="normal" className="buttons-normal-compare" text="Сравнить товары" />
          <Input
            className="input-active-2-code1"
            input="active-2"
            text="Артикул 1"
            value={vendoreCode1}
            onInputChange={handleCode1Change}
            type="text"
          />
          <Input
            className="input-active-2-code2"
            input="active-2"
            text="Артикул 2"
            value={vendoreCode2}
            onInputChange={handleCode2Change}
            type="text"
          />
          <div className="text-wrapper-3">Сравнение 2-х товаров</div>
        </div>
        <div className="compare">
          <div className="name-desc">
            {data && data !== "Error" && data.result_1.map((item, index) => (
              item.store.name === "Valta" &&
                <div key={index} className={"product-1"}>
                  <div className="name-1">{item.name}</div>
                  <div className="vendore-code-1">Артикул: {vendoreCode1}</div>
                  <div className="price-1">Цена: {item.price}</div>
                  <div className="desc-1">{item.text}</div>
                </div>
            ))}
            {data && data !== "Error" && data.result_2.map((item, index) => (
              item.store.name === "Valta" &&
                <div key={index} className={"product-2"}>
                  <div className="name-2">{item.name}</div>
                  <div className="vendore-code-2">Артикул: {vendoreCode2}</div>
                  <div className="price-2">Цена: {item.price}</div>
                  <div className="desc-2">{item.text}</div>
                </div>
            ))}
          </div>
          <div className="others">
            {data && data !== "Error" && data.result_1.map((item, index) => (
              item.store.name !== "Valta" &&
                <div key={index} className={"content-1"}>
                  <div className="others-1">Производитель: {item.store.name}, Цена: {item.price}</div>
                </div>
            ))}
            {data && data !== "Error" && data.result_2.map((item, index) => (
              item.store.name !== "Valta" &&
                <div key={index} className={"content-2"}>
                  <div className="others-2">Производитель: {item.store.name}, Цена: {item.price}</div>
                </div>
            ))}
          </div>
        </div>
        <div className="main-logo">
          <img
            src={logo}
            alt="valta"
          />
        </div>
        <Buttons onClick={handleBackClick} button="normal" className="buttons-normal-back" text="Назад" />
        <a className="text-wrapper-4" href="https://valta.ru/" rel="noopener noreferrer" target="_blank">
          Основной сайт
        </a>
        <ButtonsMenu onClick={onHistoryClick} button="normal" className="buttons-menu-normal-history" text="История сравнений" />
        <ButtonsMenu onClick={onCompareClick} button="normal" className="buttons-menu-normal-compare" text="Сравнить товары" />
      </div>
    </div>
  );
};

export default TwoProducts;
