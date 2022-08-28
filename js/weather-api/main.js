const main = () => {
  const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  const APPID = '4b5774e9f3d2a07b84f0f2f88e486224';

  // url取得関数
  const urlBuilder = (city) => `${baseURL}?lang=ja&units=metric&q=${city}&appid=${APPID}`;

  // fetchを実行する関数
  const update = (cityKey) => {
    const url = urlBuilder(cityKey);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        p_city.textContent = json['name'];
        p_temp.textContent = json['main']['temp'] + ' ℃';
        p_humidity.textContent = json['main']['humidity'] + ' %';
        p_pressure.textContent = json['main']['pressure'] + ' hPa';
        p_description.textContent = json['weather'][0]['description'];
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
