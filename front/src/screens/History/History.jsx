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
                const response = await fetch('http://10.10.208.11:8000/history/', {
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
        navigate("/twoproducts");
    };
    const onGraphClick = () => {
        navigate("/graphs");
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
                <div className="overlap-group">
                    <table>
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Артикул</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.date}</td>
                                    <td>
                                        {item.vendor_code.map((code, i) => (
                                            <div key={i} className={"elem"} onClick={() => tokenClick(code, item.date)}>{code}</div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
                <ButtonsMenu onClick={onCompareClick} button="normal" className="buttons-menu-normal-history" text="Сравнение 2 товаров" />
                <ButtonsMenu onClick={onGraphClick} button="normal" className="buttons-menu-normal-graph" text="Мониторинг цен" />
                <Buttons onClick={onBackClick} button="normal" className="buttons-normal-back" text="Назад" />
            </div>
        </div>
    );
};
