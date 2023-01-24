class Person {
    constructor(name, job, age) {
        this.name = name
        this.job = job
        this.age = age
    }

    exercise () {
        console.log("Running is fun! - said no one ever")
    }
    fetchJob () {
        console.log(`${this.name} is a ${this.job}`)
    }
}