import { logDOM } from "@testing-library/react";
import { log } from "console";

function Lesson06() {
    // * Typescript

    // * 1. string
    let username: string = 'Bob'
    username = 'Harry'
    // username = 100
    console.log(username);

    // * 2. number

    // let wantToKnowEverything: number = 42;
    // console.log(typeof NaN);
    // wantToKnowEverything = NaN;
    // wantToKnowEverything = '42';
    let number: number = 42;
    number = 7.1;
    number = NaN;
    number = 2 + Number('1')
    console.log(number);
    
    // * boolean
    let isAdmin:boolean = false
    isAdmin = true
    isAdmin = 2 > 3
    console.log(isAdmin);
    
    // * null/ underfined
    let emptyValue: null = null;
    // emptyValue = 0
    console.log(emptyValue);

    let empty: undefined = undefined
    console.log(empty);

    // * arrays типы для массивов
    const colors:string[] = ['red', 'green', 'blue']
    // colors.push(1)
    colors.push("");
    colors[3] = 'yellow' //переприсвоение
    console.log(colors);

    // * functions
    const showMessage = () => {
        console.log('hello!');
        // return 4
    }
    let fromShowMessage = showMessage()
    console.log(fromShowMessage);
    
    // void
    const showMessage1 = (): void => {
        console.log('hello!');
    }
    showMessage1()

    const sum = (a:number, b:number):number => {
        return a + b 
    }
    console.log(sum(4,10));
    let result:number = sum(13,7)
    console.log(result);
    
    // * objects как можно типизировать объекты (2 способа)
    // ** objects interface чаще пишут начиная с большой буквы I
    // у объекта ключи, а по ключам лежат разные данные. И мы пишем отдельную схему для описания типов внутри объекта

    // схема для описания объекта:
    interface IUser {
        name: string,
        age: number | string, // если мы хотим чтобы тип мог быть один или другой. Типов можно указать столько сколько угодно
        isAdmin: boolean,
        hasOwner?: boolean // ? и тогда этот ключ в объекте будет необязательным
    }

    const tom:IUser = {
        name: 'Tom',
        age: 40,
        isAdmin: false,
        hasOwner: true
    }

    const jerry:IUser = {
        name: 'Jerry',
        age: 35,
        isAdmin: true
    }

    const tomAndJerry:IUser[] = [tom, jerry] // это массив из IUserов
    console.log(tomAndJerry);

    console.log(jerry.hasOwner);
    // console.log(sharky.hasOwner);
    
    
    
    
    return (
        <div className="lesson-container">
            <h4>Lesson 06</h4>
        </div>
    )
}

export default Lesson06;