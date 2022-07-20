let arr = Number(5);


let listArr = new Array(arr);
//listArr(arr);
for(let j = 0; j < listArr.length; j++){
  console.log("The ArrayList formed at index " + j + " are as follows;");
  for(let i = 1; i <= listArr.length; i++){
    console.log("Array value is " + i);
  }
}
