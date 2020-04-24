/**
 * overide object data without mutate original data
*/ 
const meal = {
    id: 1,
    description: "Breakfast"
}

const updatedMeal = {
    ...meal,
    description: 'Dinner',
    calories: 600
}

console.log(updatedMeal)
//{ id: 1, description: 'Dinner', calories: 600 }

/**
 * delete data without mutate original data
 */
const {id, ...mealWithoutId} = updatedMeal

console.log(mealWithoutId)
//{ description: 'Dinner', calories: 600 }