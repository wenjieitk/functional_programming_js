const R = require('ramda')
const cities = require('./cities.json')

const KtoC = k => k - 273.15
const KtoF = k => k * 9 / 5 - 459.67

//es6 way
const updateTemperature = (convertFn) => {
    return city => {
        const temp = Math.round(convertFn(city.temp))
        return R.merge(city, {temp}) //replace 1st object element with 2nd object element
    }
}

const updatedCities = cities.map(updateTemperature(KtoC))
console.log(updatedCities[0])


//Ramda Curry
const updateTemperature2 = R.curry((convertFn, city) => {
        const temp = Math.round(convertFn(city.temp))
        return R.merge(city, {temp}) //replace 1st object element with 2nd object element
})

const updatedCities2 = cities.map(updateTemperature2(KtoC))
console.log(updatedCities2[0])

const city = cities[0]
const updatedCity = updateTemperature2(KtoF, city)
console.log(updatedCity)

//Ramda map
const updatedCities3 = R.map(updateTemperature2(KtoC), cities)
console.log(updatedCities3[0])