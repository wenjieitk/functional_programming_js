const R = require('ramda')
const cities = require('./cities.json')

const totalCostReducer = (acc, city) => {
    const { cost = 0 } = city
    return acc + cost
}

//es6
const totalCost = cities.reduce(totalCostReducer, 0)
const cityCount = cities.length
console.log("ES6: " + totalCost / cityCount)

//ramda
const totalCost2 = R.reduce(totalCostReducer, 0, cities)
const cityCount2 = R.length(cities)
console.log("ramda: " + totalCost2 / cityCount2)


const groupBByPropReducer = (acc,city) => {
    const { cost = [], internetSpeed = [] } = acc
    return R.merge(acc, {
        cost: R.append(city.cost, cost),
        internetSpeed: R.append(city.internetSpeed, internetSpeed)
    })
}

const groupedBbyProp = R.reduce(groupBByPropReducer, {}, cities)
console.log(groupedBbyProp)