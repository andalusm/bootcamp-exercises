export interface IHobby {
    hobbyName: string,
    yearsInHobby: number
}

export class Hobby {
    hobbyName: string;
    yearsInHobby: number;

    constructor(hobbyName: string, yearsInHobby: number) {

        this.hobbyName = hobbyName;
        this.yearsInHobby = yearsInHobby;
    }
}




