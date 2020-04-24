/**
 * combile object into array
 */

const meals = [
    { id: 1, description: "Breakfast", calories: 420 },
    { id: 2, description: "Lunch", calories: 150 }
]

const meal = {
    id: 3,
    description: "Dinner",
    calories: 290
}

// combine object into the array
const combinedMeals = [...meals, meal]

console.log(combinedMeals) //[ { id: 1, description: 'Breakfast', calories: 420 }, { id: 2, description: 'Lunch', calories: 150 }, { id: 3, description: 'Dinner', calories: 290 } ]
console.log(meal) //{ id: 3, description: 'Dinner', calories: 290 }


/**
 * update data in object of array
 * pass fn in .map()
 */
const updateDescription = (meal) => {
    if(meal.id === 2)
        return {
            ...meal,
            description: 'Early Lunch'
        }
    return meal
}

const updatedMeals = combinedMeals.map(updateDescription)

console.log(updatedMeals)
// [
//     { id: 1, description: 'Breakfast', calories: 420 },
//     { id: 2, description: 'Early Lunch', calories: 150 },
//     { id: 3, description: 'Dinner', calories: 290 }
// ]


/**
 * remove data in object of array (remove id = 1 and id = 2)
 * pass fn in .filter()
 */
const ids = [1,2]

const filteredMeals = updatedMeals.filter(meal => !ids.includes(meal.id))

console.log(filteredMeals)