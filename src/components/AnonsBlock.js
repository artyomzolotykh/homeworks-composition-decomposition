//** Вывод левой верхней части, новости и работа над ошибками */

import NewsBlock from "./NewsBlock";
import Widget from "./Widget";

const AnonsBlock = () => {
  const links = [
    {
      id: 1,
      title: "в Германии",
      url: "#",
    },
    {
      id: 2,
      title: "Рекомендуем",
      url: "#",
    },
  ]

  return (
    <div className="AnonsBlock">
      <NewsBlock
        title="Сейчас в СМИ"
        url="#"
        links={links}
      />
      <Widget title="Работа над ошибками" url="#" icon="https://via.placeholder.com/100">
        <p>Смотрите на Яндексе и запоминайте</p>
      </Widget>
    </div>
  )
}

export default AnonsBlock;