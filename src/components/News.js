//** Отдельная новость строка */

const News = props => {
  return (
    <div className="News">
      <a href={props.url}>
        <img src={props.icon} alt={props.title} />
        <span>{props.title}</span>
      </a>
    </div>
  )
}

export default News;