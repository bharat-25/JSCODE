function fibnacciSeries(n){
    const result= [];
    Array.from({length:n}).reduce((acc,_,i)=>
     {
        if(i<2){
            acc.push(i)
        }else{
            const nxtvalue=acc[i-1]+acc[i-2];
            acc.push(nxtvalue);
        }
        return acc;
    },result);
    return result;
}

// const fib=n=>Array.from({length:n}).reduce((acc,val,i) => acc.concat(i>1?acc[i-1]+acc[i-2]:1,[]));

console.log(fibnacciSeries(10));