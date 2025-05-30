const student = {
    name: "김규철",
    age: 22
}

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);
const a = 'name';
const b = 'age';
console.log(student[a]);
console.log(student[b]);
student[a] = '김규찰';
console.log(student.name)

student.printName = () => console.log("이름", student.name);
student.printName(); 
const loginButton = {
    text: "로그인",
    value: "test",
    onclick: () => {
        console.log(loginButton.text)
    },
}

loginButton.onclick();
loginButton.onclick = () => {
    console.log("로그인 버튼을 클릭하였습니다.")
}
loginButton.onclick();

console.log(typeof(loginButton));
console.log(Object.keys(loginButton));

const loginButtonKeys = Object.keys(loginButton);
for (let i = 0 ; i < loginButtonKeys.length ; i++) {
    const keyName = loginButtonKeys[i]
    console.log(keyName);
}

const loginButtonValues = Object.values(loginButton);
for (let i = 0 ; i < loginButtonValues.length ; i++) {
    console.log(loginButtonValues[i])
}

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
for (let i = 0 ; i < loginButtonEntries.length ; i++) {
    const entry = loginButtonEntries[i]
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value)
}

for (let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value)
}

// https://github.com/velopert/learnjs



