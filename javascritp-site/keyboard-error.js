function getURLParams(url) {
  let str = "";
  let newStr = "";
  let num = url.indexOf("=");
  str = url.substring(num);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "=") {
      newStr += str[i + 1];
    }
  }
  return newStr;
}

console.log(getURLParams("https://jscodebox.com/test.xml?id=3&value=file"));
// RESULT = [3,file]
