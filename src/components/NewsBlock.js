//** Блок с новостями */

import News from './News';
import RowThreeElements from './RowThreeElements';

const NewsBlock = props => {

  const news = [
    {
      id: 1,
      title: "Путин упростил получение автомобильных номеров",
      url: "#",
      icon: "https://via.placeholder.com/15",
    },
    {
      id: 2,
      title: "В команде Зеленского раскрыли план реформ на Украине",
      url: "#",
      icon: "https://via.placeholder.com/15",
    },
    {
      id: 3,
      title: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье",
      url: "#",
      icon: "https://via.placeholder.com/15",
    },
    {
      id: 4,
      title: "Суд закрыл дело Демпартии США против России",
      url: "#",
      icon: "https://via.placeholder.com/15",
    },
    {
      id: 5,
      title: "На Украине призвали создать ракеты для удара по Москве",
      url: "#",
      icon: "https://via.placeholder.com/15",
    },
  ]

  const rateOfExchange = [
    {
      id: 1,
      title: "USD MOEX",
      value: "63,52",
      rate: "+0,09",
    },
    {
      id: 2,
      title: "EUR MOEX",
      value: "70,86",
      rate: "+0,14",
    },
    {
      id: 3,
      title: "НЕФТЬ",
      value: "64,90",
      rate: "+1,63%",
    },
  ]

  return (
    <div className="NewsBlock">
      <h2>
        <a className="mainLink" href={props.url}>{props.title}</a>
        {props.links.map(link => <a href={link.url} key={link.id}>{link.title}</a>)}
      </h2>

      <div className="NewsWrapper">
        {news.map(({title, url, icon, id}) => 
          <News
            title={title}
            url={url}
            icon={icon}
            key={id}
          />
        )}
      </div>

      <div className="RateExchangeWrapper">
        {rateOfExchange.map(({title, value, rate, id}) =>
          <RowThreeElements
            title={title}
            value={value}
            optional={rate}
            key={id}
          />
        )}
      </div>
    </div>
  )
}

export default NewsBlock;