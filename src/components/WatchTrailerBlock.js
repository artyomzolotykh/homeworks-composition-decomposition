//** Вывод баннера */

const WatchTrailerBlock = props => {
  return (
    <div className="WatchTrailerBlock">
      <a href={props.url}>
        <img src={props.img} alt={props.title} />
      </a>
    </div>
  )
}

export default WatchTrailerBlock;