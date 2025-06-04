const student = {
    name: '김규철',
    age: 22,
    address: '부산 사하구',
    phone: '010-2496-9933'
};

// 비구조 할당
const {name, address} = student;
console.log(name, address);

// REST 문밥
const {age, phone, ...rest} = student;
console.log(age, phone, rest);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// 객체 spread
const newStudent = {
    ...student,
    gender: '남',
};

console.log(newStudent);

// 배열 spread
const newNumbers = [...numbers, 5];
console.log(newNumbers);

const newNumbers2 = numbers;

let names = [];

function addName(name) {
    names = [...names, name];
}

let obj = {
    data1: "data1",
    data2: "data2",
}

function addProps(props) {
    obj = {
        ...obj,
        ...props
    }
}
addProps({data3: "data3", data4: "data4"});
console.log(obj);


















