const findTheOldest = function(people) {
    let oldest_person_age = 0;
    let oldest_person;
    people.forEach(element => {
        let age;
        if ("yearOfDeath" in element) {
            age = element.yearOfDeath - element.yearOfBirth;
        } else {
            age = new Date().getFullYear() - element.yearOfBirth;
        };

        if (age > oldest_person_age) {
            oldest_person_age = age;
            oldest_person = element;
        };
    });
    return oldest_person
};

// Do not edit below this line
module.exports = findTheOldest;
