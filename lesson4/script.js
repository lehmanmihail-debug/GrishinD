const array = [-3,-1, 0, 3.14, 10, 20 ]

const newArray = array.filter(function(element) {
    if (element >= 0) {
        return true
    }
    else {
        return false
    }
})
console.log(array)
console.log(newArray)