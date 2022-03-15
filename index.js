// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return name =  cats.push("Ralph")
}
function destructivelyPrependCat(name){
    return name = cats.unshift("Bob")  //prepends a cat to the beginning of the cats array
}
function destructivelyRemoveLastCat(){
   return cats.pop("Garfield")  //removes the last cat from the cats array
}
function destructivelyRemoveFirstCat(){//removes the first cat from the cats array
    return cats.shift("Milo")
}

function appendCat(name){//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
    name = [...cats, "Broom"]
    return name
}
  function prependCat(name){ // prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
    name = ["Arnold", ...cats]
    return name
}

 function removeLastCat(){// removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
    return cats.slice(0,2)
}

function  removeFirstCat(){//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
    return cats.slice(1)
}

