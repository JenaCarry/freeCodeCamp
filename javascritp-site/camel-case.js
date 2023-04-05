function camelCase(n) {
    let str = n.split(" ");
    let newString = "";
    for (let i = 0; i < str.length; i++) {
        newString += str[i].substring(0, 1).toUpperCase() + str[i].substring(1);
    }
    let result =
        newString.substring(0, 1).toLowerCase() + newString.substring(1);
    return result;
}

console.log(camelCase("Camel Base Black"));
