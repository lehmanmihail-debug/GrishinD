# Работа с функциями 
### параметрами аргументами
function myFunction (a,b) {  
    return a + b  
}  
console.log(myFunction(3,2))
### Без параметров
function myFunctionTwo () {  
    let a = 2  
    let b = 3  
    let c = a + b  
    console.log(c)  
}  
myFunctionTwo()
### без return
function myFunctionThree (a,b) {  
    let c = a + b  
    console.log(c)  
}  
myFunctionThree(3,2)
### Стрелочная функция 
const myFunctionFourth = () => {  
    let a = 2  
    let b = 3  
    let c = a + b  
    console.log(c)  
}  
myFunctionFourth()
# Обьекты


const user = {
    name: "Ivanov",
    age: 20,
}

user.rating = 3.14

user.name ="Sidorov"
delete user['name']
console.log('rating' in user)



копирование обьектов