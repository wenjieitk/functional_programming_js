const R = require('ramda')
const cities = require('./cities.json')

const filterByWeather = city => {
    const { temp = 0, humidity = 0} = city
    return temp > 0 && temp < 300 && humidity > 30 && humidity < 70
}

const filteredCities = R.filter(filterByWeather, cities)

console.log('filter')
console.log(R.length(filteredCities))

//sorting and top 10
const sortedCities = R.sortWith(
    [R.descend(city => city.cost)],
    cities
)

const top10 = R.take(10, sortedCities)

console.log('top10')
console.log(top10)