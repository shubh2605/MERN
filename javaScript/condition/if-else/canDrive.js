let age = 18;
let license = false;

function canDriveOrNot(age, license) {
    if (age >= 18) {
        if (license == true) {
            console.log("You can drive!");
        } else {
            console.log("Without license, You can't drive");
        }
    } else {
        console.log("You are under 18. You cannot drive");
    }
}

canDriveOrNot(age, license);