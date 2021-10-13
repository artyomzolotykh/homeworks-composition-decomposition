//** Строка с двумя пунктами: жирным шрифтом надпись тире текст. (Посещаемое) */

const RowTwoElements = ({title, text}) => {
  return (
    <div className="RowTwoElements">
      <b>{title}</b> - <span> {text}</span>
    </div>
  )
}

export default RowTwoElements;