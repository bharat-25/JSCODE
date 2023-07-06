//ForEach Loop

let sub=["Maths","English","Physics"]
sub.forEach((myfun)=>{
    console.log(sub)
// document.write(sub)
})

//map()

let num=[1,2,3,4]
let res=num.map(myfun)
// document.write(res)
console.log(num);
function myfun(){
    return num*10
}