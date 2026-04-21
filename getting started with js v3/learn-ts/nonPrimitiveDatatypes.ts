let arr: string = ["1", "2", "3", "4"];

arr = [1, 2, 3, 5];
console.log(arr);

let user: { name: string, age: number } = {
  name: "Aaqib",
  age: 26
}


user.name = 65// not assignable to user.name since it is a string

console.log(user)

