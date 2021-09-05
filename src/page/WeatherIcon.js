export default function WeatherIcon(props) {
  return (
    <img
      src={`https://developer.accuweather.com/sites/default/files/${props.icon}-s.png`}
      alt="weather-icon"
    />
  );
}
