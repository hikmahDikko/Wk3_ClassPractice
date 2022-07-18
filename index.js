let x = [11, -5, 8, 1, 3, 6, 7, 4, 10, 2, 9];
//console.log(x[1]);

for(let i = 0; i < x.length; i++){
  console.log("Index " + i + "; " + "value = "+ x[i]);
}
console.log([0, 1].length);
function findItemIndex(x, t){
    for(let i = 0; i < x.length; i++){
      if(x[i] == t){
        return i;
      }
    }
  return -1;
}

let index = findItemIndex(x, 5);
console.log(index);

function bubbleSort(x){
  let swapped = true;
 do{
   swapped = false;
   for(let i = 0; i < x.length; i++){
   if(x[i] > x[i+1]){
     let temp = x[i];
     x[i] = x[i+1];
     x[i + 1] = temp;
     swapped = true;
   }
 }
 } while (swapped)
  return x;
}
