//given an array and print every value which is multiply by 2

//[1,2,3,4,5,]
//[2,4,6,8,10]
const input=[1,2,3,4,5];

const newArray=[];
for(let i=0;i<input.length;i++){
    newArray[i]=input[i]*8000;
}
console.log(newArray)

//map
function transform (i){
    return i*2;
}
const ans = input.map(transform);
console.log(ans);


const result =  input.map(function(i){
    return i*4;
})

console.log(result);

