function greeting() {
    console.log('Hello There');
}

greeting();

function speedTest(name, speed) {
    const fast = 55;
    const slow = 40;

    if (speed >= fast) {
        console.log(name + ' exceeded the speed limit at ' + speed + ' MPH ');
    } else if (speed <= slow) {
        console.log(name + ' went under the speed limit at ' + speed + ' MPH ');
    } else {
        console.log(name + ' acceptable speed ');
    }
}

speedTest('Kia Rio', 35);

speedTest('Honda Civic Type R', 93);