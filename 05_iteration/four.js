const myObject = {
    js: "javascript",
    cpp: "c++",
    swift: "Swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py","java"]

for (const key in programming) {
    console.log(programming[key]);
    
}