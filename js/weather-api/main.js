const p = console.log;

const select_city = document.getElementById('select_city');
select_city.addEventListener('change', (event) => {
   p('変更された', event.currentTarget.value);
});

/*
https://api.openweathermap.org/data/2.5/weather?q=London&appid=4b5774e9f3d2a07b84f0f2f88e486224

let text = document.getElementById('nametext');
text.addEventListener('change', inputChange);
*/
