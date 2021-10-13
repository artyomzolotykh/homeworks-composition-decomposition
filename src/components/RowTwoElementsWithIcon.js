//** Строка с двумя пунктами: текст черным и текст серым цветом. (Эфир) */

const RowTwoElementsWithIcon = ({text, optional}) => {
  return (
    <div className="RowTwoElementsWithIcon">
      <span>{text}</span>
      <span class="gray">{optional}</span>
    </div>
  )
}

export default RowTwoElementsWithIcon;