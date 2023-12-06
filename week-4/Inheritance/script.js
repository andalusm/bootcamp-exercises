class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
    //method overriding!
    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }
}

class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear)
        this.grades = []
        this.salary = salary
        this.courses = {}
    }

    giveGrade(student, courseName, finalGrade) {
        student.receiveGrade(courseName, finalGrade)
    }
    addCourse(course) {
        if (this.courses[course]) {
            this.courses[course] = this.courses[course] + 1

        }
        else {
            this.courses[course] = 1
        }
    }
}

const s1 = new Student("Ronda", 2017)
const t1 = new Teacher("Cassandra", 2002, 40000)

t1.giveGrade(s1, "Algebra II", 82)
const firstGrade = s1.grades[0]

console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
//above should print "Ronda received an 82 in Algebra II"﻿
t1.addCourse("Algebra II")
t1.addCourse("Algebra II")
t1.addCourse("Trigonometry")
console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}


class Page{
    constructor(text){
        this.text = text
    }
}

class Notebook{
    constructor(pageNum){
        this.pageNum = pageNum
        this.pages = []
    }

    write(page){
        this.pages.push(page)
    }
}

class Diary extends Notebook{
    constructor(pageNum, owner){
        super(pageNum)
        this.owner = owner
    }
}

const myDiary = new Diary(50, "Shila")
const mathNotebook = new Notebook(200)
const p1 = new Page("Pythagoreas realized tha the sum of the squares of the sides of a right triangle will equal the square of the hypoteneuse")
myDiary.pages.push(new Page("I think I'm in love with a Greek man."))

console.log(myDiary.pages[0].text)

// console.log(mathNotebook.pages[0].text)


console.log(p1 instanceof Page)
console.log(myDiary instanceof Notebook)
// console.log(myDiary instanceof mathNotebook)

class Image{
    constructor(url, width, height, db){
        this.url = url
        this.width = width || 150 
        this.height = height || 150    
        this.db = db
    }

    save(){
        this.db.save(JSON.stringify(this))
    }
}

class SQL_DB{
    constructor(){}
    save(str){
        //wicked code that saves to SQL database
    }
}

class Mongo_DB{
    constructor(){}
    save(str){
        //wicked code that saves to Mongo database
    }
}

const sqlDB = new SQL_DB()
const mongoDB = new Mongo_DB()
const pic = new Image("https://a3.amazon.com/93112/ist.png", null, null, sqlDB)

pic.save()

class APIManager{
    constructor(route){
        this.route = route
        this.data = {}
    }

    fetch(){
        $.get(this.route, function(response){
            this.data = response
        })
    }
}

class Renderer{
    construcor(scriptID, containerID, apiManager){
        this.scriptID = scriptID
        this.containerID = containerID
        this.apiManager = apiManager
    }

    render(){    
        let source = $("#" + this.scriptID).html()
        let template = Handlebars.compile(source)
        $("#" + this.containerID).append(template(this.apiManager.data))
    }
}

const foodApi = new APIManager("/foodRoute")
const renderer = new Renderer("food-template", "container", foodApi)

foodApi.fetch()
renderer.render()




