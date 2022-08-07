//  Show output from 1 to 50
// if the number is divisible by 3 the instead of the number, show foo
// if the number is divisible by 5 the instead of the number, show bar
// if the number is divisible both 3,5 the instead of the number, show fobar

for (i = 1; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log('foobar');
    }

    else if (i % 3 === 0) {
        console.log('foo');
    }
    else if (i % 5 === 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}