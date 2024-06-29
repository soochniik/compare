import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import { Input } from "../../components/Input";
import "./style.css";
import logo from "../../assets/logo.png";
import Chart from "chart.js/auto";

export const Graphs = ({ token }) => {
  const [vendoreCode, setCode] = useState("");
  const [store, setStore] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const chartRef = useRef(null); // Ссылка на экземпляр графика

  const handleCodeChange = (event) => {
    setCode(event);
  };

  const handleStoreChange = (event) => {
    setStore(event.target.value);
  };

  const onHistoryClick = () => {
    navigate("/history");
  };

  const onCompareClick = () => {
    navigate("/");
  };

  const handleGraphClick = async () => {
    try {
      const response = await fetch('http://10.10.208.11:8000/graph/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vendor_code: vendoreCode,
          store: store,
        })
      });

      const responseData = await response.json();
      setData(responseData);
      console.log("responseData:", responseData);

      // Построение графика
      buildChart(responseData);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  // Функция для построения графика
  const buildChart = (data) => {
    if (data) {
      const dates = data.map(item => item.date);
      const prices = data.map(item => item.price);

      if (chartRef.current) {
        chartRef.current.destroy(); // Уничтожение предыдущего графика
      }

      const ctx = document.getElementById('myChart').getContext('2d');
      chartRef.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [{
            label: 'Price',
            data: prices,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }
      });
    }
  };

  useEffect(() => {
    buildChart(data);
  }, [data]);

  return (
    <div className="graph">
      <div className="div-2">
        <div className="styka">
          <canvas id="myChart"></canvas>
        </div>
        <div className="overlap-group">
          <div className="ellipse" />
          <Buttons onClick={handleGraphClick} button="normal" className="buttons-normal-graph" text="Построить график" />
          <Input
            className="input-active-2-code"
            input="active-2"
            text="Артикул"
            value={vendoreCode}
            onInputChange={handleCodeChange}
            type="text"
          />
          <select
            className="input-active-2-store"
            value={store}
            onChange={handleStoreChange}>
            <option value="Valta">Valta</option>
            <option value="Old_farm">Old_farm</option>
            <option value="Bethoven">Bethoven</option>
            <option value="4_Lapy">4_Lapy</option>
            <option value="Kotmatros">Kotmatros</option>
            <option value="Magizoo">Magizoo</option>
            <option value="Zoomag">Zoomag</option>
            <option value="Zoozavr">Zoozavr</option>
          </select>
          <div className="text-wrapper-3">Мониторинг цен</div>
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
        <ButtonsMenu onClick={onHistoryClick} button="normal" className="buttons-menu-normal-history" text="История сравнений" />
        <ButtonsMenu onClick={onCompareClick} button="normal" className="buttons-menu-normal-compare" text="Сравнить товары" />
      </div>
    </div>
  );
};

export default Graphs;
