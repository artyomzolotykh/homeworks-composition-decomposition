//** Внутреннее содержимое виджета погоды */

const WeatherWidget = ({state, value, morning, noon}) => {
  return (
    <div className="WeatherWidget">
      <div className="weatherIconBlock">
        <span className={`weatherIcon ${state}`}></span>
      </div>
      <div className="weatherValue">{value}°</div>
      <div className="weatherBlock">
        <div className="weatherMorning">Утром {morning},</div>
        <div className="weatherNoon">днём {noon}</div>
      </div>
    </div>
  )
}

export default WeatherWidget;