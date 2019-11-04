import React, {useState} from 'react';
import './Header.scss';

export const title = 'UK Energy Generation Data';
export const formatDate = (date) => {
  const formatedDate = new Date(date);
  return `${formatedDate.toLocaleDateString()} ${formatedDate.getHours()}:${('0' + formatedDate.getMinutes()).slice(-2)}`;
}


export default ({data}) => {
  const dateFrom = formatDate(data.from);
  const dateTo = formatDate(data.to);
  return (
    <header className="header">
      <h1 className="header__title">UK Energy Generation Data</h1>
      <h2 className="header__subTitle">
        from <span className="header__subTitle__time">{dateFrom}</span> to <span className="header__subTitle__time">{dateTo}</span>
      </h2>
    </header>
  )
}
