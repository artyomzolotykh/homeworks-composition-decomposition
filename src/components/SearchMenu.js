//** Меню */

const SearchMenu = props => {
  return (
    <div className="SearchMenu">
      <ul>
        {props.items.map(({id, url, text}) => 
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SearchMenu;