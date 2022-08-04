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
    const urlBuilder = (city) => `${baseURL}?lang=ja&units=metric&q=${city}&appid=${APPID}`;

    // 画面更新
    const disp = (temp, humidity, pressure, description) => {
       p_temp.textContent = temp;
       p_humidity.textContent = humidity;
       p_pressure.textContent = pressure;
       p_description.textContent = description;
    };

    // fetchを実行する関数
    const update = (city) => {
        const url = urlBuilder(city);
        fetch(url)
            .then(response => response.json())
            .then(json => {
                const temp = json['main']['temp'] + ' ℃';
                const humidity = json['main']['humidity'] + ' %';
                const pressure = json['main']['pressure'] + ' hPa';
                const description = json['weather'][0]['description'];
                disp(temp, humidity, pressure, description);
            });
    };

    // 画面読み込み時の処理
    update('London');

    // 都市変更時の処理
    select_city.addEventListener('change', (event) => {
        const city = event.currentTarget.value;
        update(city);
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
