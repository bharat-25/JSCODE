// var a=[1,2,3,4,5];
// var b=[...a];
// b.pop()
// console.log(b)
// console.log(a)


var obj={name:"Hello"};
var copyobj={...obj};
console.log(copyobj)
console.log(obj)
copyobj.name="Bharat";
console.log(copyobj)