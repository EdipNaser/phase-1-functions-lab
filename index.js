// Code your solution in this file!
function distanceFromHqInBlocks(number) {
    if (number >= 42) { 
        return number - 42
    }
    else {
        return 42 - number
    }
}

function distanceFromHqInFeet(number) {
    return distanceFromHqInBlocks(number) * 264
}

function distanceTravelledInFeet(start, des) {
    if (start > des) {
        return (start - des) * 264
    }
    else if (des > start) {
        return (des - start) * 264
    }
}

function calculatesFarePrice(stat, des) {
    
    if (distanceTravelledInFeet(stat, des) < 400) {
        return 0
    }
    
    else if (distanceTravelledInFeet(stat, des) <= 2000) {
        return (distanceTravelledInFeet(stat, des) - 400) * 0.02
    }
    

    else if (distanceTravelledInFeet(stat, des) >= 2500) {
        return 'cannot travel that far'
    }
    
    else if (distanceTravelledInFeet(stat, des) > 2000) {
        return 25
    }
}

const result = calculatesFarePrice(43,44)

console.log(result)
