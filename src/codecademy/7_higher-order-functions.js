function functions() {
    /**
     * 2. Functions as data
     */

    const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
        for (let i = 1; i <= 1000000; i++) {
            if (2 + 2 != 4) {
                console.log('Something has gone very wrong :( ')
            }
        }
    }

    const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes

    is2p2()

    console.log(is2p2.name)

    /**
     * 3. Functions as parameters
     */

    const addTwo = num => num + 2

    const timeFuncRuntime = funcParameter => {
        let t1 = Date.now()
        funcParameter()
        let t2 = Date.now()
        return t2 - t1
    }

    const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes)

    const checkConsistentOutput = (func, val) => {
        const testFirst = func(val)
        const testSecond = func(val)
        if (testFirst === testSecond) {
            return testSecond
        } else return 'This function returned inconsistent results'
    }

    console.log(checkConsistentOutput(addTwo, 2))
}

functions()
