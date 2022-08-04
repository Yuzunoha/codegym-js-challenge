const main = () => {
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  const APPID = '4b5774e9f3d2a07b84f0f2f88e486224';

  const select_city = document.getElementById('select_city');
  const p_city = document.getElementById('p_city');
  const p_temp = document.getElementById('p_temp');
  const p_humidity = document.getElementById('p_humidity');
  const p_pressure = document.getElementById('p_pressure');
  const p_description = document.getElementById('p_description');

  // url取得関数
  const urlBuilder = (city) => `${baseURL}?lang=ja&units=metric&q=${city}&appid=${APPID}`;

  // 画面更新
  const disp = (cityName, temp, humidity, pressure, description) => {
    p_city.textContent = cityName;
    p_temp.textContent = temp;
    p_humidity.textContent = humidity;
    p_pressure.textContent = pressure;
    p_description.textContent = description;
  };

  // fetchを実行する関数
  const update = (cityKey) => {
    const url = urlBuilder(cityKey);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const cityName = json['name'];
        const temp = json['main']['temp'] + ' ℃';
        const humidity = json['main']['humidity'] + ' %';
        const pressure = json['main']['pressure'] + ' hPa';
        const description = json['weather'][0]['description'];
        disp(cityName, temp, humidity, pressure, description);
      });
  };

  // 画面読み込み時の処理
  update('London');

  // 都市変更時の処理
  select_city.addEventListener('change', (event) => {
    update(event.currentTarget.value);
  });
};

document.addEventListener('DOMContentLoaded', main);
