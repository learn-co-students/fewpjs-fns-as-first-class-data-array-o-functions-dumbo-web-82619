let wakeDog = function(dogName="Byron", dogBreed="poodle"){
    const wake = `Wake ${dogName} the ${dogBreed}`;
    console.log(wake);
    return wake
}

let leashDog = function(dogName="Byron", dogBreed="poodle") {
    const leash = `Leash ${dogName} the ${dogBreed}`;
    console.log(leash);
    return leash;
}

let walkToPark = function(dogName="Byron", dogBreed="poodle") {
    const park = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log (park);
    return park;
}

let throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
    const frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(frisbee);
    return frisbee;
}

let walkHome = function(dogName="Byron", dogBreed="poodle") {
    const home = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(home);
    return home;
}

let unleashDog = function(dogName="Byron", dogBreed="poodle") {
    const unleash = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleash);
    return unleash;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];


function exerciseDog(dog, breed){
   return routine.map(fn => fn(dog, breed))
}


