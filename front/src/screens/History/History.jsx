import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Buttons } from "../../components/Buttons";
import { ButtonsMenu } from "../../components/ButtonsMenu";
import "./style.css";
import logo from "../../assets/logo.png";

export const History = ({ token }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/history/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
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
    }, [location.search, token]);

    const onBackClick = () => {
        navigate(-1);
    };
    const onCompareClick = () => {
        navigate("/");
    };
    const tokenClick = (code, date) => {
        navigate(`/oldcomparison?oldcomparison=${code}_${date}`);
    };
    return(
        <div className = "history">
            <div className="div-2">
                <header className="header">
                    <div className="text-wrapper-3">История сравнений</div>
                </header>
                <div className="ellipse" />
                <div className="overlap-group">
                    {data && data.map((item, index) => (
                        <div key={index} className={"product"}>
                            <div className="product-content">
                                {item.date} {item.vendor_code.map((code, i) => (
                                    <div className={"elem"} onClick={() => tokenClick(code, item.date)}>{code}</div>
                                ))}
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
                <a className="text-wrapper-7" href="https://valta.ru/" rel="noopener noreferrer" target="_blank">
                    Основной сайт
                </a>
                <ButtonsMenu onClick={onCompareClick} button="normal" className="buttons-menu-normal-history" text="Сравнить товары" />
                <Buttons onClick={onBackClick} button="normal" className="buttons-normal-back" text="Назад" />
                <p className="p">Все права защищены АО «Валта Пет Продактс», 2014 - 2024</p>
            </div>
        </div>
    );
};
