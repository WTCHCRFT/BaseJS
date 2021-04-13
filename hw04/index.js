function task1() {
    let userNumber;

    do {
        userNumber = +prompt('Введите число от 0 до 999');
        if (userNumber > 999) {
            console.log(`${userNumber} больше 999`);
            let empty = {};
            return empty;
        }
    } while (userNumber > 999 || isNaN(userNumber) || userNumber < 0);

    writeObject(transformNumberToObject(userNumber));

    function transformNumberToObject(userNumber) {
        let splitUserNumber = userNumber.toString().split('').reverse();
        return createSplitObject(splitUserNumber);
    }

    function createSplitObject(splitUserNumber) {
        let nameOfParam = ['единицы', 'десятки', 'сотни'];
        let splitObject = {};

        for (let key in splitUserNumber) {
            splitObject[nameOfParam[key]] = splitUserNumber[key];
        }

        return splitObject;
    }

    function writeObject(obj) {
        for (let prop in obj) {
            console.log(prop + ": " + obj[prop]);
        }
    }
} qweqwqwe