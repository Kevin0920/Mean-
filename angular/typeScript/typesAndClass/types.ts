let myNum: number = 5;
let myString: string = "Hello Universe";
let myArr: number[]=[1,2,3,4];
let myObj: {name: string;} = {name: "Bill"};
let anythingVariable: any = 'Hey';
let anythingVaraible: any = 25;
let arrayOne: Array<boolean> = [true, false, true, true];
let arrayTwo: any = [1, 'abc', true, 2];
const myObj = {
    x:5,
    y:10
};
function sendingErrors(): never{
    throw new Error('Error message');
}

let myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
function myFunction(): void{
    console.log('Hello World');
    return;



}
class MyNode {
    val: number;
    _priv: number;
    constructor(val: number) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
};


