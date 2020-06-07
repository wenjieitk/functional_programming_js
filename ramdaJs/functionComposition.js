const R = require('ramda')
const cities = require('./cities.json')
const table = require('text-table')


const KtoC = k => k - 273.15
const KtoF = k => k * 9 / 5 - 459.67

const filterByWeather = city => {
    const { temp = 0, humidity = 0} = city
    return temp > 0 && temp < 300 && humidity > 30 && humidity < 70
}

const updateTemperature = R.curry((convertFn, city) => {
    const temp = Math.round(convertFn(city.temp))
    return R.merge(city, {temp}) //replace 1st object element with 2nd object element
})

const cityToArray = city => {
    const {name, country ,cost, temp, internetSpeed} = city
    return [name, country ,cost, temp, internetSpeed]
}

const interestingProps = [
    'Name',
    'Country',
    'Cost',
    'Temp',
    'Internet'
]

const topCities = R.pipe(
    R.map(updateTemperature(KtoC)),
    R.filter(filterByWeather),
    R.sortWith([R.descend(city => city.cost)]),
    R.take(10),
    R.map(cityToArray),
    R.prepend(interestingProps), //insert element at the front of array
    table
)

console.log(topCities(cities))