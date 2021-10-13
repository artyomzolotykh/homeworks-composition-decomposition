//** Общий компонент для виджетов. (Работа над ошибками, Погода, Посещаемое, Карта Германии ...) */

const Widget = props => {
  const imgObject = props.icon ? <img src={props.icon} alt={props.title} /> : null;

  return (
    <div className="Widget">
      {imgObject}
      <h2>
        <a href={props.url}>
          {props.title}
        </a>
      </h2>
      {props.children}
    </div>
  )
}

export default Widget;