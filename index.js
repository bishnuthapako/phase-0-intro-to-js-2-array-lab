// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    return name =  cats.push("Ralph")
}
function destructivelyPrependCat(name){
    return name = cats.unshift("Bob")  //prepends a cat to the beginning of the cats array
}
function destructivelyRemoveLastCat(){
   return cats.pop()  //removes the last cat from the cats array ("Garfield")
}

function destructivelyRemoveFirstCat(){//removes the first cat from the cats array ("Milo")
    return cats.shift()
}  
function appendCat(name){
    const cats2 = [...cats, name];
    return cats2
}
console.log(appendCat("Broom"))


function prependCat(name){ 
    const catsArnold = [name, ...cats]
    return catsArnold
}
console.log(prependCat('Arnold'));

 function removeLastCat(){
    const catRemoveLast = cats.slice(0,2)
    return catRemoveLast;
}
console.log(removeLastCat())

function  removeFirstCat(){
    const catRemoveFirst = cats.slice(1)
    return catRemoveFirst;
}
console.log(removeFirstCat())
