import {IHobby} from "./Hobby";

export interface IPerson {
    name: string
    age: number
    height: number
    hobbies: IHobby[]
    weight: number
    grow: () => void
    loseWeight: (num: number) => void
    addHobby: (hobby: IHobby) => void
    getHobbiesNames: () => string[]
}


