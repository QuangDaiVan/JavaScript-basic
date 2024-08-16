// Arrow function: hàm mũi tên, là 1 sự thay thế với cú pháp đơn giản hơn so với hàm biểu thức (declaration function)
// Sẽ có những sự khác nhau nhất định giữa hàm biểu thức và hàm mũi tên
// Lưu ý: arrow function không dùng cho từ khóa this

let sayHi = (someone) => {
    console.log(`Hi ${someone}! I'm quang2802 from Vietnam`)
}

sayHi('aliens')