// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
    const newArray = []
    newArray.push(arr[0])
    newArray.push(arr[1])
    return newArray
}
//returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function (arr) {   
    const newArray = []
    newArray.push(arr[arr.length-2])
    newArray.push(arr[arr.length-1])
    return newArray
}
//returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(int) {return int * 5}
}

//const start = createFareMultiplier

function fareDoubler(start){
    return start * 2 
}

function fareTripler(start){
    return start * 3 
}

function selectDifferentDrivers(arr, cb){
    return cb(arr);   
}