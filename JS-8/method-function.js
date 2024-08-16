// Method function: hàm phương thức, là hàm được định nghĩa, khai báo bên trong đối tượng và được coi là 1 phương thức của đối tượng

let developer = {
    name: 'quang',
    age: 22,
    gender: 'male',
    country: 'Vietnam',
    greet: function () {
        console.log(`Hi Aliens, I am ${this.name} fro the planet Earth.`)
    }
}

// Lưu ý: arrow function không dùng cho từ khóa this