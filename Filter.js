// given an array give the even values from it

const arr=[1,2,3,4,5,6,78];
const newArr=[];

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);

function filterLogic(n){
    if(n%3 ==0)return true;
    else return false;
}
const ans= arr.filter(filterLogic);
console.log(ans);