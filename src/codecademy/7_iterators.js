function iterators() {
    /**
     * 2. The forEach() method
     */
    const fruits = ['mango', 'papaya', 'pineapple', 'apple']

    fruits.forEach(element => console.log(`I want to eat a ${element}`))

    /**
     * 3. The map() method
     */

    const animals = [
        'Hen',
        'elephant',
        'llama',
        'leopard',
        'ostrich',
        'Whale',
        'octopus',
        'rabbit',
        'lion',
        'dog',
    ]

    const secretMessage = animals.map(animal => animal.charAt(0))

    console.log(secretMessage.join(''))

    const bigNumbers = [100, 200, 300, 400, 500]

    const smallNumbers = bigNumbers.map(number => number / 100)

    console.log(smallNumbers)

    /**
     * 4. The filter() method
     */

    const randomNumbers = [375, 200, 3.14, 7, 13, 852]

    const rNumbers = randomNumbers.filter(number => {
        return number < 250
    })
    console.log(rNumbers)

    const favoriteWords = [
        'nostalgia',
        'hyperbole',
        'fervent',
        'esoteric',
        'serene',
    ]

    const longFavoriteWords = favoriteWords.filter(word => {
        return word.length > 7
    })
    console.log(longFavoriteWords)

    /**
     * 5. The findIndex() method
     */

    const anims = [
        'hippo',
        'tiger',
        'lion',
        'seal',
        'cheetah',
        'monkey',
        'salamander',
        'elephant',
    ]

    const foundAnimal = anims.findIndex(animal => {
        return animal === 'elephant'
    })

    const startsWithS = anims.findIndex(animal => {
        return animal.charAt(0) === 's'
    })

    /**
     * 6. The reduce method
     */

    const newNumbers = [1, 3, 5, 7]

    const newSum = newNumbers.reduce((accumulator, currentValue) => {
        console.log('The value of accumulator: ', accumulator)
        console.log('The value of currentValue: ', currentValue)
        return accumulator + currentValue
    }, 10)

    console.log(newSum)

    /**
     * 7. Iterator documentation
     */

    const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise']

    console.log(
        words.some(word => {
            return word.length < 6
        })
    )

    const interestingWords = words.filter(word => word.length > 5)

    console.log(interestingWords)

    console.log(
        interestingWords.every(word => {
            return word.length > 5
        })
    )

    /**
     * 8. Choosing the right iterator
     */

    const cities = [
        'Orlando',
        'Dubai',
        'Edinburgh',
        'Chennai',
        'Accra',
        'Denver',
        'Eskisehir',
        'Medellin',
        'Yokohama',
    ]

    const nums = [1, 50, 75, 200, 350, 525, 1000]

    //  Choose a method that will return undefined
    cities.forEach(city => console.log('Have you visited ' + city + '?'))

    // Choose a method that will return a new array
    const longCities = cities.filter(city => city.length > 7)

    // Choose a method that will return a single value
    const word = cities.reduce((acc, currVal) => {
        return acc + currVal[0]
    }, 'C')

    console.log(word)

    // Choose a method that will return a new array
    const smallerNums = nums.map(num => num - 5)

    // Choose a method that will return a boolean value
    nums.some(num => num < 0)

    /**
     * 9. Review
     */

    const callbackFunc = word => {
        if (word.includes('a')) return true
        else return false
    }

    const testArray = ['e', 'a', 'i', 'o', 'u']

    const indexOfA = testArray.findIndex(callbackFunc)

    console.log(indexOfA)

    testArray.splice(indexOfA, indexOfA)

    console.log(testArray)

    const newIndexOfA = testArray.findIndex(callbackFunc)

    console.log(newIndexOfA)

    const iterChaining = testArray
        .map(word => {
            return (word += 'test')
        }, 3)
        .filter(word => word.includes('ot'))

    console.log(iterChaining)

    console.log(testArray.reduce((a, b) => a + b))
}

iterators()
