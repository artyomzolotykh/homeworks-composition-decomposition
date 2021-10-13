//** Строка с тремя пунктами: 2 основных текста и один дополнительный серый. (Курс обмена и Телепрограмма) */

const RowThreeElements = ({title, value, optional}) => {
  return (
    <div className="RowThreeElements">
      <span>{title}</span>
      <span>{value}</span>
      <span className="gray">{optional}</span>
    </div>
  )
}

export default RowThreeElements;