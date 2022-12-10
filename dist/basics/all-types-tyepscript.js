"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["DEVELOPER"] = 2] = "DEVELOPER";
    Role[Role["TESTER"] = 3] = "TESTER";
})(Role || (Role = {}));
const person = {
    name: "Aravinth",
    age: 30,
    healthMeasurement: {
        bloodPressure: "129/80",
        temperature: 98,
        temperatureDate: 12122022
    },
    hobbies: ['Basketball', 'Football'],
    sizes: ["Hello", 2.5],
    role: Role.ADMIN
};
console.log(person);
console.log(person.role);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
let favoriteHobby;
favoriteHobby = ["Basketball", "Football", 121, true,];
//# sourceMappingURL=all-types-tyepscript.js.map