function myEach(collection, alert) {
  // if collection is an object, pass object through Object.values = new array
  if (arrOrObj(collection) !== true) {
    let newObjArray = Object.values(collection);
    for (let i = 0; i < newObjArray.length; i++) {
      alert(newObjArray[i]);
    }
    return collection;
  } else {
    for (let i = 0; i < collection.length; i++) {
      alert(collection[i]);
    }
    return collection;
  }
  // if collection is an array, iterate through array with .map(element => alert(element)) as callback
}
function myMap(collection, callback) {
  const newArray = [];
  if (arrOrObj(collection) !== true) {
    let newObjArray = Object.values(collection);
    for (let i = 0; i < newObjArray.length; i++) {
      newArray.push(newObjArray[i] * 3);
    }
    return newArray;
  } else {
    for (let i = 0; i < collection.length; i++) {
      newArray.push(collection[i] * 3);
    }
    return newArray;
  }
}

function myReduce(collection, callback, acc) {

  if (arrOrObj(collection) !== true) {
    let newObjArray = Object.values(collection);
    if (acc === undefined) {
      acc = newObjArray[0];
      newObjArray.shift();
    }

    for (let i = 0; i < newObjArray.length; i++) {
      acc = callback(acc, newObjArray[i], newObjArray);
    }
    return acc;
  } else {
    if (acc === undefined) {
      acc = collection[0];
      collection.shift();
    }
    for (let i = 0; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    return acc;
  }
}

function myFind(collection,predicate){
let newCollection = arrOrObj(collection);
    for (let i = 0; i < newCollection.length; i++){
     if(predicate(newCollection[i])) return newCollection[i]}

    
    return undefined
    }

function myFilter(collection, predicate){
    let newCollection = arrOrObj(collection);
    let solutions = [];
    for (let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){solutions.push(newCollection[i])}
    }
    return solutions;
}

    
function mySize(collection){
    let newCollection = arrOrObj(collection);
    return newCollection.length;
}

function myFirst(array, n){
    if(n){
        return array.slice(0, n)
    }else{
        return array[0];
}
}
function myLast(array, n){
    if(n){
        return array.slice(-n);
    }else{
        return array.pop();
    }
}

function myKeys(object){
    return Object.keys(object);
}

function myValues(object){
    return Object.values(object);
}

// helper method
function arrOrObj(collection) {
  if(Array.isArray(collection)){
    return [...collection];
  }else{
    return Object.values(collection);
  }
}

// const myArray = [1,2,3,4];
// const myObj = {one: 1, two: 2, three: 3};
// console.log(Array.isArray(myObj));
