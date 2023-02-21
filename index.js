/**
 * 변수 Key값을 각각의 표기법으로 재정의한다.
 * @param {any} value 변수
 * @param {string} notation 표기법(camel, pascal, snake)
 * @return {any} notation에 맞게 변환된 value를 리턴
 */
const changeValueNotation = (value, notation) => {
    let changeFunction = null;
    switch (notation) {
        case "camel":
            changeFunction = changeCamelCase;
            break;
        case "pascal":
            changeFunction = ChangePascalCase;
            break;
        case "snake":
            changeFunction = change_snake_case;
            break;
        default:
            changeFunction = changeCamelCase;
            break;
    }
    if (typeof value === "string") {
        return changeFunction(value);
        // switch (notation) {
        //     case 'camel':
        //         return changeCamelCase(value);
        //     case 'pascal':
        //         return ChangePascalCase(value);
        //     case 'snake':
        //         return change_snake_case(value);
        //     default:
        //         return changeCamelCase(value);
        // }
    } else if (typeof value === "object") {
        let returnValue = {};
        for (key in value) {
            returnValue[changeFunction(key)] = value[key];
        }
        return returnValue;
    }
};

const changeCamelCase = (value) => {
    let returnValue = "";
    for (let i = 0; i < value.length++; i++) {
        if (i == 0 && value.charAt(i) === value.charAt(i).toUpperCase()) {
            returnValue = value.charAt(i).toLowerCase();
        } else if (i != value.length - 1 && value.charAt(i) === "_") {
            returnValue += value.charAt(i + 1).toUpperCase();
            i++;
        } else {
            returnValue += value.charAt(i);
        }
    }
    return returnValue;
};

const ChangePascalCase = (value) => {
    let returnValue = "";
    for (let i = 0; i < value.length++; i++) {
        if (i == 0 && value.charAt(i) === value.charAt(i).toLowerCase()) {
            returnValue = value.charAt(i).toUpperCase();
        } else if (i != value.length - 1 && value.charAt(i) === "_") {
            returnValue += value.charAt(i + 1).toUpperCase();
            i++;
        } else {
            returnValue += value.charAt(i);
        }
    }
    return returnValue;
};
const change_snake_case = (value) => {
    let returnValue = "";
    for (let i = 0; i < value.length++; i++) {
        if (i == 0 && value.charAt(i) === value.charAt(i).toUpperCase()) {
            returnValue = value.charAt(i).toLowerCase();
        } else if (
            i != value.length - 1 &&
            value.charAt(i) === value.charAt(i).toUpperCase() &&
            value.charAt(i) != "_"
        ) {
            returnValue += `_${value.charAt(i).toLowerCase()}`;
        } else {
            returnValue += value.charAt(i);
        }
    }
    return returnValue;
};

const { masking } = require("./masking.js");
module.exports = { changeValueNotation, masking };
