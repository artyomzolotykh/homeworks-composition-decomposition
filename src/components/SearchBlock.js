//** Вывод логотипа, строки поиска, меню и текста под поиском */

import SearchForm from "./SearchForm";
import SearchInfo from "./SearchInfo";
import SearchMenu from "./SearchMenu";

const SearchBlock = () => {
  const menuItems = [
    {
      id: 1,
      text: "Видео",
      url: "#",
    },
    {
      id: 2,
      text: "Картинки",
      url: "#",
    },
    {
      id: 3,
      text: "Новости",
      url: "#",
    },
    {
      id: 4,
      text: "Карты",
      url: "#",
    },
    {
      id: 5,
      text: "Маркет",
      url: "#",
    },
    {
      id: 6,
      text: "Переводчик",
      url: "#",
    },
    {
      id: 7,
      text: "Эфир",
      url: "#",
    },
    {
      id: 8,
      text: "Еще",
      url: "#",
    },
  ]

  return (
    <div className="SearchBlock">
      <div className="mainLogo">
        <a href="https://yandex.ru">
          <img src="https://via.placeholder.com/100x60?text=Yandex" alt="Yandex" />
        </a>
      </div>
      <div>
        <SearchMenu items={menuItems} />
        <SearchForm />
        <SearchInfo />
      </div>
    </div>
  )
}

export default SearchBlock;