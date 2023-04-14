export const reverseString = (string1, string2) => {
    let str = string1 + string2;
    return str.split("").reverse().join("");
}

export const concatOnly = (string1, string2) => {
    return string1 + string2;
}