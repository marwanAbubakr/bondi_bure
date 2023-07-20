"use strict";
// var type is any and i wanna to did`nt show error => "noImplicitAny": false
// Parameter not used and i wanna show error => "noUnusedParameters": true,
// var not used and i wanna show error => "noUnusedLocals": true,
// the line after return not work and i wanna alert me to this erorr => "allowUnreachableCode"
function reportErrors(username, age) {
    let rank = 'Professor';
    return `Username: ${username}`;
    console.log('We Will Not Reach Here');
}
console.log(reportErrors('Elzero', 40));
