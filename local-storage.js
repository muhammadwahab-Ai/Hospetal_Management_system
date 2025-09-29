const student = {
    name : "Abubaker",
    class : 34,
    age : 15
}
localStorage.setItem("student", JSON.stringify(student))  
let Data = JSON.parse(localStorage.getItem("student"))


console.log(Data);



