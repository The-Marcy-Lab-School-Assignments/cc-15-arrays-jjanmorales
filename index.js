//write your code here
//function findLongestWord
//takes in an array of strings
//returns the largest word - the first longest string that appears in the array
//----- Algorithm
//Declare function
//Initialize an empty string array 
//Initialize a for-loop that cycles through the array of strings
//Conditional that if i is a longer length, put it in the string array
//return index zero because that would be the first word 

const findLongestWord = array => {
    let long = "";
    for(let word of array){
        if(word.length > long.length){
            long = word;
        }
    }
    return long;
};

console.log(findLongestWord(["sugar", "crack", "stars"]));