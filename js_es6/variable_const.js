const MYNAME = "Tim"; // uppercase names for const is an industry standard

const MYARRAY = [1, 2, 3];
console.log(MYARRAY);
MYARRAY.push(4); // you can't reasign a const but you can mutate
console.log(MYARRAY);

const MYOBJECT = { name: "Tim"}
console.log(MYOBJECT);
MYOBJECT.name = "John";
console.log(MYOBJECT);

function sayHi() {
    if (true) {
        const MYNAME = "Tim";
        console.log("Hi " + MYNAME);
    }
}
sayHi()
