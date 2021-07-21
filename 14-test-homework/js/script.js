//1.
function* createIdGenerator() {
    let i = 1;

    while (true) {
        yield i++;
        }
    }

const idGenerator = createIdGenerator();

console.group('Бесконечный генератор');
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.groupEnd();

//2.
function* newFontGenerator(i) {
    let result = yield i;
    
    while (true) {
        if (result == 'up') {
            result = yield i += 2;
        } else if (result == 'down') {
            result = yield i -= 2;
        } else {
            result = yield i;
        }
    }
}

const fontGenerator = newFontGenerator(14);

console.group('Advanced');
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
console.groupEnd();