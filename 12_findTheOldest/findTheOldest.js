const findTheOldest = function(people) {
    let maxsofar = 0;
    let max_idx = 0;
    for (let i = 0; i < people.length; ++i) {
        let person = people[i];
        let year = new Date().getFullYear();
        let age = (Object.hasOwn(person, 'yearOfDeath') ? person.yearOfDeath - person.yearOfBirth : year - person.yearOfBirth);
        if (age > maxsofar) {
            maxsofar = age;
            max_idx = i;
        }
        console.log(age);
    }
    return people[max_idx];
};

// Do not edit below this line
module.exports = findTheOldest;
