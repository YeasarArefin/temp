const API_KEY = `636117d6bf224b0a5516334cc64c6ca0`;
const searchTemperature = (event) => {

    event.preventDefault();

    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    document.getElementById('city-name').value = '';

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
};

const setInnerText = (id, text) => {

    document.getElementById(id).innerText = text;

};

const displayTemp = (temperature) => {

    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    console.log(temperature);

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);

};