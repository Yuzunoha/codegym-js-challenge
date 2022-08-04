const main = () => {
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    const APPID = '4b5774e9f3d2a07b84f0f2f88e486224';

    const p = console.log;
    const select_city = document.getElementById('select_city');
    const p_temp = document.getElementById('p_temp');
    const p_humidity = document.getElementById('p_humidity');
    const p_pressure = document.getElementById('p_pressure');
    const p_description = document.getElementById('p_description');

    // url取得関数
    const urlBuilder = (city) => `${baseURL}?lang=ja&q=${city}&appid=${APPID}`;

    // 更新関数
    const disp = (city) => {
        // fetch(url)
    };

    // 画面読み込み時の処理
    p(urlBuilder('Tokyo'));

    // 都市変更時の処理
    select_city.addEventListener('change', (event) => {
       p('変更された', event.currentTarget.value);
       p_temp.textContent = '気温';
       p_humidity.textContent = '湿度';
       p_pressure.textContent = '気圧';
       p_description.textContent = '天気';
    });
};

document.addEventListener('DOMContentLoaded', main);

/*
https://api.openweathermap.org/data/2.5/weather?lang=ja&q=London&appid=4b5774e9f3d2a07b84f0f2f88e486224
{
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [{
    "id": 801,
    "main": "Clouds",
    "description": "薄い雲",
    "icon": "02d"
  }],
  "base": "stations",
  "main": {
    "temp": 292.02,
    "feels_like": 291.76,
    "temp_min": 290.21,
    "temp_max": 294.58,
    "pressure": 1014,
    "humidity": 69
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.63,
    "deg": 270
  },
  "clouds": {
    "all": 19
  },
  "dt": 1659599911,
  "sys": {
    "type": 2,
    "id": 2075535,
    "country": "GB",
    "sunrise": 1659587311,
    "sunset": 1659642279
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "ロンドン",
  "cod": 200
}
*/
