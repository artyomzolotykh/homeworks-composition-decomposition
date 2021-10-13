//** Вывод нижних виджетов */

import RowThreeElements from "./RowThreeElements";
import RowTwoElements from "./RowTwoElements";
import RowTwoElementsWithIcon from "./RowTwoElementsWithIcon";
import WeatherWidget from "./WeatherWidget";
import Widget from "./Widget";

const WidgetsBlock = () => {

  const tvProgramm = [
    {
      id: 1,
      title: "02:00",
      value: "ТНТ. Best",
      optional: "ТНТ International",
    },
    {
      id: 2,
      title: "02:15",
      value: "Джинглики",
      optional: "Карусель INT",
    },
    {
      id: 3,
      title: "02:25",
      value: "Наедине со всеми",
      optional: "Первый",
    },
  ]

  const visited = [
    {
      id: 1,
      title: 'Недвижимость',
      text: 'о сталинках',
    },
    {
      id: 2,
      title: 'Маркет',
      text: 'люстры и светильники',
    },
    {
      id: 3,
      title: 'Авто.ру',
      text: 'привод 4х4 до 500 000',
    },
  ]

  const ephir = [
    {
      id: 1,
      text: 'Управление как искусство',
      optional: 'Успех',
    },
    {
      id: 2,
      text: 'Ночь. Мир в это время',
      optional: 'earthTV',
    },
    {
      id: 3,
      text: 'Андрей Возн...',
      optional: 'Совершенно секретно',
    },
  ]

  return (
    <div className="WidgetsBlock">

      <Widget title="Погода" url="#">
        <WeatherWidget 
          state="rainy"
          value="+17"
          morning="+17"
          noon="+20"
        />
      </Widget>

      <Widget title="Посещаемое" url="#">
        <div className="visited">
          {visited.map(({id, title, text}) =>
            <RowTwoElements
              key={id}
              title={title}
              text={text}
            />
          )}
        </div>
      </Widget>

      <Widget title="Карта Германии" url="#">
        <p>Расписания</p>
      </Widget>

      <Widget title="Телепрограмма" url="#">
        <div className="tvLabel">Эфир</div>
        <div className="tvProgramm">
          {tvProgramm.map(({id, title, value, optional}) =>
            <RowThreeElements
              key={id}
              title={title}
              value={value}
              optional={optional}
            />
          )}
        </div>
      </Widget>

      <Widget title="Эфир" url="#">
        <div className="ephir">
          {ephir.map(({id, text, optional}) =>
            <RowTwoElementsWithIcon
              key={id}
              text={text}
              optional={optional}
            />
          )}
        </div>
      </Widget>

    </div>
  )
}

export default WidgetsBlock;