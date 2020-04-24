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



/**
 * test
 */

// 1. create a constant named friends, 
// which is an array that contains 2 
// names of your choosing.
const friends = [
    {name: 'jason'},
    {name: 'ling'}
]

// 2. Create a new constant named updatedFriends, 
// which includes the friends array values plus 
// one additional name
const updatedFriends = [
    ...friends,
    {name: 'sing'}
]

// 3. Create a new constant named friendNameLengths, 
// which is based on the array updatedFriends, 
// but instead of having the friends names, 
// have the array store the length of each persons name.
const friendNameLengths = updatedFriends.map((fren) => {
    return fren.name.length
})

// 4. Create a new constant named shorterNamedFriends, 
// which will be a list of the friends except the friend with the longest name.
const maxFriendLength = Math.max(...friendNameLengths)
const shorterNamedFriends = updatedFriends.filter(fren => fren.name.length < maxFriendLength )
console.log(shorterNamedFriends)
