import React, { useState, useEffect, useRef} from "react";
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
  const groupRef = useRef(null); // Создаем ref для кнопки Group
  const groupReff = useRef(null);
  const [showDescription, setShowDescription] = useState(false); // Состояние для отображения/скрытия описания
  const [showAnalog, setShowAnalog] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const vendorCode = queryParams.get("comparison");
    if (vendorCode) {
        setVendor(vendorCode); // Обновляем значение vendor

        const fetchData = async () => {
            try {
                const response = await fetch('http://10.10.208.11:8000/analysis/', {
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
        
                if (responseData !== "Error") {
                  setData(responseData);
                  console.log("responseData:", responseData);
                } else {
                  if (responseData === "Error") {
                    window.alert("Артикул не найден");
                  } else {
                    console.error('Произошла ошибка, но сервер не вернул текст ошибки');
                  }
                }
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

  const onTwoClick = () => {
    navigate("/twoproducts");
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
          <div className="text-wrapper-5">Предложения на других сайтах</div>
          {data && data !== "Error" && data.result.map((item, index) => (
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
        <ButtonsMenu onClick={onTwoClick} button="normal" className="buttons-menu-normal-two" text="Сравнить 2 товара" />
        <Buttons onClick={onBackClick} button="normal" className="buttons-normal-back" text="Назад" />
        <div className="text-wrapper-7">Валта</div>
        {data && data !== "Error" && data.result.find(item => item.store.name === 'Valta') && (
          <>
            <div className="text-wrapper-8">{data.result.find(item => item.store.name === 'Valta').name}</div>
            <div className="text-wrapper-9">Цена: {data.result.find(item => item.store.name === 'Valta').price}</div>
          </>
        )}
        <div className="text-wrapper-11">Артикул: {vendor}</div>
        <div className="group" ref={groupRef} onClick={onGroupClick}>
          Описание
          {showDescription && data && data !== "Error" &&
            <div className="description">
                <div className="desc-valta">{data.result.find(item => item.store.name === 'Valta').text}</div>
            </div>
          }
        </div>
        <div className="recommend">Аналоги</div>
        {data && data !== "Error" && data.similar.map((item, index) => (
          <div key={index} className={"similar"}>
            <div className="similar-content">{item.name}, Артикул: {item.vendor_code}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
