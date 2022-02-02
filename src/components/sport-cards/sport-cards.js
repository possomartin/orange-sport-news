import React from 'react';
import './sport-cards.css';

export default function SportCards({ item }) {
    if (item) {
        return (
            <li key={item.id}>
                <a href={item["matchviewUrl"]} target="_blank" className="card">
                    <img src={item["thumbnail"]} className='card_image'/>
                    <div className="card__overlay">
                        <div className="card__header">
                            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img className="card__thumb" src={item["thumbnail"]} alt="" />
                            <div className="card__header-text">
                                <h3 className="card__title">{item["title"]}</h3>
                                <span className="card__status">{item["date"]}</span>
                            </div>
                        </div>
                        <p className="card__description">{item["competition"]}</p>
                    </div>
                </a>
            </li>
        );
    }
}
