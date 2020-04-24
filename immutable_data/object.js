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

console.log(updatedMeal) //{ id: 1, description: 'Dinner', calories: 600 }


/**
 * delete data without mutate original data
 */
const {id, ...mealWithoutId} = updatedMeal

console.log(mealWithoutId) //{ description: 'Dinner', calories: 600 }


/**
 * passing data without mutate original data
 */
 const getMeal = ({...meal}) => {
     meal.id = 999
     return meal
 }

console.log(getMeal(meal)) //{ id: 999, description: 'Breakfast' }
console.log(meal) //{ id: 1, description: 'Breakfast' }