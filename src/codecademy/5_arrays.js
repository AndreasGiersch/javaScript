function arrays() {
    /**
     * 2. Creating arrays
     */

    const hobbies = ['one', 'two', 'three']
    console.log(hobbies)

    /**
     * 3. Accessing elements
     */

    const famousSayings = [
        'Fortune favors the brave.',
        'A joke is a very serious thing.',
        'Where there is love there is life.',
    ]

    const listItem = famousSayings[0]
    console.log(listItem)
    console.log(famousSayings[2])
    console.log(famousSayings[3])

    const testString = 'Kraubio'

    console.log(testString[2] === 'a' ? 'Yes' : 'fail')

    /**
     * 4. Updating elements
     */

    let ingredients = ['bread', 'tomatoes', 'milk']

    ingredients[1] = 'avocados'

    /**
     * 5. Arrays with let and const
     */

    let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha']

    const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork']

    condiments[0] = 'Mayo'

    console.log(condiments)

    condiments = ['Mayo']

    console.log(condiments)

    utensils[3] = 'Spoon'

    console.log(utensils)

    /**
     * 6. The length prop
     */

    const objectives = [
        'Learn a new languages',
        'Read 52 books',
        'Run a marathon',
    ]
    console.log(objectives.length)

    /**
     * 7. The push() method
     */

    const chores = ['wash dishes', 'do laundry', 'take out trash']

    chores.push('feed baby', 'walk the dog')

    console.log(chores)

    console.log(chores.push('blabla chore'))

    /**
     * 8. The pop() method
     */

    const tasks = [
        'wash dishes',
        'do laundry',
        'take out trash',
        'cook dinner',
        'mop floor',
    ]

    tasks.pop()

    console.log(tasks)

    console.log(tasks.pop())

    /**
     * 9. More array methods
     */

    const groceryList = [
        'orange juice',
        'bananas',
        'coffee beans',
        'brown rice',
        'pasta',
        'coconut oil',
        'plantains',
    ]

    groceryList.shift()
    console.log(groceryList)

    groceryList.unshift('popcorn')
    console.log(groceryList)

    console.log(groceryList.slice(1, 4))
    console.log(groceryList)

    const pastaIndex = groceryList.indexOf('pasta')
    console.log(pastaIndex)

    /**
     * 10. Arrays and functions
     */

    const concept = ['arrays', 'can', 'be', 'mutated']

    function changeArr(arr) {
        arr[3] = 'MUTATED'
    }

    changeArr(concept)
    console.log(concept)

    function removeElement(newArr) {
        newArr.pop()
    }

    removeElement(concept)

    console.log(concept)

    /**
     * 11. Nested Arrays
     */

    const numberClusters = [
        [1, 2],
        [3, 4],
        [5, 6],
    ]
    const target = numberClusters[2][1]
    console.log(target)

    /**
     * 12. Review
     */

    const test = [1, 2, 3, 4, 5, 6, 7]
    const lastEl = test[test.length - 1]
    console.log(lastEl)

    const textArr = ['test', 'test1', 'test2']
    let arrString = ''

    textArr.forEach(element => (arrString += element))
    console.log(arrString)

    console.log(textArr.push(12))
    const pushReturn = textArr.push(1000)
    console.log('push returns ' + pushReturn)

    const nestArray = [
        ['a', 'b'],
        [1, 2],
        [true, false],
    ]
    console.log(
        nestArray[0][1] + ' is ' + nestArray[1][1] + ' ' + nestArray[2][0]
    )
}

arrays()
