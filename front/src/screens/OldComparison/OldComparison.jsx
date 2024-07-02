import React, { useState, useEffect, useRef} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import "./style.css";
import logo from "../../assets/logo.png";

export const OldComparison = ({ token }) => {
  const [data, setData] = useState(null);
  const [vendor, setVendor] = useState(null); // Состояние для хранения значения vendor
  const navigate = useNavigate();
  const location = useLocation();
  const groupRef = useRef(null); // Создаем ref для кнопки Group
  const groupReff = useRef(null);
  const [showDescription, setShowDescription] = useState(false); // Состояние для отображения/скрытия описания
  const [showAnalog, setShowAnalog] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const vendorCode = queryParams.get("oldcomparison").toString().split('_')[0];
    const date = queryParams.get("oldcomparison").toString().split('_')[1];
    if (vendorCode) {
        setVendor(vendorCode); // Обновляем значение vendor

        const fetchData = async () => {
            try {
                const response = await fetch('http://10.10.208.11:8000/product_history/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        vendor_code: vendorCode,
                        date: date,
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

  const onHistoryClick = () => {
    navigate("/history");
  };

  const onGraphClick = () => {
    navigate("/graphs");
  };

  const handleDocumentClick = (e) => {
      if (groupRef.current && !groupRef.current.contains(e.target)) {
          setShowDescription(false); // Закрываем выпадающее описание при клике вне кнопки
      }
    };

  useEffect(() => {
      document.addEventListener("click", handleDocumentClick); // Добавляем обработчик события клика для всего документа
      return () => {
          document.removeEventListener("click", handleDocumentClick); // Удаляем обработчик события клика при размонтировании компонента
      };
  }, []);

  const onGroupClick = () => {
      setShowDescription(!showDescription); // При клике на кнопку отображаем/скрываем описание
    };

  const handleDocumentClick2 = (e) => {
    if (groupReff.current && !groupReff.current.contains(e.target)) {
        setShowAnalog(false); // Закрываем выпадающее описание при клике вне кнопки
    }
  };

  useEffect(() => {
      document.addEventListener("click", handleDocumentClick2); // Добавляем обработчик события клика для всего документа
      return () => {
          document.removeEventListener("click", handleDocumentClick2); // Удаляем обработчик события клика при размонтировании компонента
      };
  }, []);

  /*const onGroupClickAnalog = () => {
      setShowAnalog(!showAnalog); // При клике на кнопку отображаем/скрываем описание
  };*/

  return (
    <div className="comparison">
      <div className="div-2">
        <div className="ellipse" />
        <div className="overlap-group">
          <div className="text-wrapper-5">Аналоги</div>
          {data && data.map((item, index) => (
            item.store.name !== "Valta" &&
              <div key={index} className={"element"}>
                <div className="element-content">
                  <div className="text-wrapper-2">Продавец: {item.store.name}</div>
                  <div className="text-wrapper-3">{item.name}</div>
                  <div className="text-wrapper-4">Цена: {item.price}</div>
                  {/*<div className="group2" ref={groupReff} onClick={onGroupClickAnalog}>
                    Описание
                    {showAnalog && data &&
                        <div className="description2">
                            <div className="desc-analog">{item.text}</div>
                        </div>
                    }
                  </div>*/}
                </div>
              </div>
          ))}
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
        <ButtonsMenu onClick={onHistoryClick} button="normal" className="buttons-menu-normal-history" text="История сравнений" />
        <ButtonsMenu onClick={onGraphClick} button="normal" className="buttons-menu-normal-graph" text="Мониторинг цен" />
        <Buttons onClick={onBackClick} button="normal" className="buttons-normal-back" text="Назад" />
        <div className="text-wrapper-7">Валта</div>
        {data && data.find(item => item.store.name === 'Valta') && (
          <>
            <div className="text-wrapper-8">{data.find(item => item.store.name === 'Valta').name}</div>
            <div className="text-wrapper-9">Цена: {data.find(item => item.store.name === 'Valta').price}</div>
          </>
        )}
        <div className="text-wrapper-11">Артикул: {vendor}</div> {/* Используем значение vendor здесь */}
        <div className="group" ref={groupRef} onClick={onGroupClick}>
            Описание
            {showDescription && data &&
                <div className="description">
                    <div className="desc-valta">{data.find(item => item.store.name === 'Valta').text}</div>
                </div>
            }
        </div>
      </div>
    </div>
  );
};

export default OldComparison;
