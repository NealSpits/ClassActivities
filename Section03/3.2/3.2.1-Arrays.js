// create an Array using an Array literal
const snacks = ["chips", "fruit snacks", "triscuits", "cheesesticks", "crackers"];
// access the 1st item in the Array
console.log(snacks[0]);
// access the last item in the Array
console.log(snacks[4]);
// print the length of the Array
console.log(snacks.length);
// use the length property to access the last item in the Array
console.log(snacks[snacks.length -1]);
// with for...of, loop over the Array, modify the value and add to a different Array
for (let snack of snacks){
    console.log(snack);
}