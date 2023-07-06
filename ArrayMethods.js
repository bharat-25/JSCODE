

//toString  --> they convert array into string
let num=[1,2,3,4,5]
let a=num.toString()
document.write(a, typeof a)
document.write("<br>")

//join() --> join all the array element using a separator
let b=num.join("-")
document.write(b)
document.write("<br>")

//pop() --> remove last element from an array
let c=num.pop()
document.write(num,"<br>",c)
document.write("<br>")

//push()  ---> add new element at the end od an array
let d=num.push(6)
document.write(num)

//shift() --> remove an element from the start of an array
let e=num.shift(num)
document.write("<br>")
document.write(e,"<br>",num)
document.write("<br>")

//unshift()---> add an element at the beginning of an array
let f=num.unshift(9)
document.write(num)
document.write("<br>")

//sort()-->  sort the array in ascending order
num.sort()
document.write(num)

