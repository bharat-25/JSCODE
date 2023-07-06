function bubbleSort(arr){
    return arr.reduce((acc,cur,i)=>{
        if(i<arr.length-1){
            if(acc[i]>acc[i+1]){
                [acc[i],acc[i+1]]=[acc[i+1],acc[i]];
            }
        }  
        return acc;
    },arr);
}

const arr=[5,9,2,7,1];
console.log(bubbleSort(arr));



// const bubbleSort = (arr) => {
//     return arr.reduce((acc, val, i, arr) => {
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//           let temp = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = temp;
//         }
//       }
//       return arr;
//     }, arr);
//   };
  
//   let arr = [9,56,56,213,4,5,78];
//   console.log(bubbleSort(arr))ction bubbleSort(arr){
//     return arr.reduce((acc,cur,i)=>{
//         if(i<arr.length-1){
//             if(acc[i]>acc[i+1]){
//                 [acc[i],acc[i+1]]=[acc[i+1],acc[i]];
//             }
//         }  
//         return acc;
//     },acc);
// }

// const arr=[5,9,2,7,1];
// console.log(bubbleSort(arr));;
// function bubbleSort(arr){
//     return Math.min(acc,cur)
// }
