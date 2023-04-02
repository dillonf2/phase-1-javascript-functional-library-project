function objToArray(obj){
    return Object.values(obj)
}
function myEach(collection, alert){

    for (const key in collection){
        alert(collection[key])
    }

    alert=(e)=>{return e}
    return alert(collection)
}
function myMap(collection,alert){
    let newArray=[]
    objToArray(collection).map(function(e){
        newArray.push(alert(e))
        return newArray
    })
    return newArray
}

function myReduce (collection,callback,startingAcc){
    if (typeof startingAcc===`undefined`){
        startingAcc=0
        return objToArray(collection).reduce((accumulator, currVal) => {return callback(accumulator,currVal)})
    } 
    else {

    return objToArray(collection).reduce((accumulator, currVal) => {
        return callback(accumulator,currVal)
    }, startingAcc)
    }
}
function myFind(collection,predicate){
    return collection.find(predicate)
}

function myFilter(collection,predicate){
    return objToArray(collection).filter(predicate)}

function mySize(array){
    return objToArray(array).length
}
function myFirst(array,n){
    let int=n
    if (typeof n===`undefined`){
        int=1
        let newArray=[array.slice(0,int)]
        return newArray[0][0]
    } else {
    let newArray=[array.slice(0,int)]
    return newArray[0]
    }
}

function myLast(array,n){
    let int=-n
    if (typeof n===`undefined`){
        int=-1
        let newArray=[array.slice(int,array.length)]
        return newArray[0][0]
    } else {
    let newArray=[array.slice(int,array.length)]
    return newArray[0]
    }
}

function myKeys(obj){
    return Object.keys(obj)
}
function myValues(obj){
    return Object.values(obj)
}