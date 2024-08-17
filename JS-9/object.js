// trong js, đối tượng (object) là 1 cấu trúc dữ iệu linh hoạt và mạnh mẽ, cho phép lưu trữ và quản lý các dữ liệu phức tạp.
// Đối tượng bao gồm các cặp key-value. Mỗi key là 1 chuỗi và giá trị có thể là bất kì loại dữ liệu nào
// bao gồm cả các đối tượng khác (nested object)

// 2 cách tạo object với cú pháp object literal và từ khóa new Object()

// cú pháp object literal
let developer = {
    name: 'quang',
    age: 22,
    gender: 'male',
    country: 'Vietnam',
    greet: function () {
        console.log(`Hi Aliens, I am ${this.name} fro the planet Earth.`)
    },
    skills: ['js', 'python', 'C#', 'ruby', 'java', 'golang']
}

// cú pháp new Object()
let developer2 = new Object()
developer2.name = 'minhanh'
developer2.age = 22


// truy cập thuộc tính bên trong object: có 2 cách
console.log(developer.name)
console.log(developer['name'])

// thêm / sửa / xóa thuộc tính của Object
//thêm thuộc tính
developer.address = 'ha noi'
// dùng cách ghi đè
developer.age = 23
// xóa
delete developer.gender

// lặp qua các thuộc tính của đối tượng: dùng for-in
// đối tượng chứa các thuộc tính là method function
