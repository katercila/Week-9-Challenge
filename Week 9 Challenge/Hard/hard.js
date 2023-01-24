//this is a variable              2 parameters 
const personDetails = function(personName, personSsn){
    // this is an object (pii) with two properties
    pii = {
        name: personName,
        ssn: personSsn
    }
    return {
        getName : () => {
            return pii.name
        },
        getSnn : () => {
            return pii.ssn
        }
    }
}

const personOne = personDetails("kat", 123451234)

console.log(personOne.getName());
console.log(personOne.getName());

console.log(patientOne.name);
console.log(patientOne.name);