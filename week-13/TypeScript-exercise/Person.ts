import {IPerson} from "./Person.interface";
import {IHobby} from "./Hobby";

export class Person implements IPerson {
    name: string
    age: number
    height: number
    hobbies: IHobby[]
    weight: number

    constructor(name: string,
                age: number,
                height: number,
                hobbies: IHobby[],
                weight: number) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.hobbies = hobbies;
        this.weight = weight;
    }


    grow() {
        this.age++;
    }

    loseWeight(num: number) {
        this.weight -= num;
    }

    addHobby(hobby: IHobby) {
        this.hobbies.push(hobby);
    }

    getHobbiesNames() {
        return this.hobbies.map(hobby => {
            return hobby.hobbyName;
        })
    }

}
