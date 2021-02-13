function greeting() {
    console.log('Hello There');
}

greeting();

const fast = 55;
const slow = 40;

function speedTest(name, speed) {

    if (speed >= fast) {
        console.log(name + ' exceeded the speed limit at ' + speed + ' MPH ');
    } else if (speed <= slow) {
        console.log(name + ' went under the speed limit at ' + speed + ' MPH ');
    } else {
        console.log(name + ' acceptable speed ');
    }
}

speedTest('Kia Rio', 35);

speedTest('Nissan Sentra', 43);

speedTest('Honda Civic Type R', 93);

function dumbFunction() {
    console.log('this is a dumb function')
}

dumbFunction();