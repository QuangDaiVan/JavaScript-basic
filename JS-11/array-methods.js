// có khá nhiều ethod - phương thức khi xử lý dữ liệu mảng tỏng js
// dưới đây sẽ là vài phương thức quan trọng và được sử dụng trong thực tế

let numbers = [1, 2, 3, 4, 5]

// push(): thêm phần tử vào cuối cùng của mảng, thay đổi mảng cũ, càn truyền đối số
numbers.push(6)
console.log('after push: ', numbers)

// pop(): xóa phần tử vào cuối cùng của mảng, thay đổi mảng cũ
numbers.pop()
console.log('after pop: ', numbers)

// shift(): loại bỏ phần tử đầu tiên của mảng và thay đổi mảng cũ
numbers.shift()
console.log('after shift: ', numbers)

// unshift(): thêm phần tử vào đầu mảng và thay đổi mảng cũ, cần truyền đối số
numbers.unshift(1)
console.log('after unshift: ', numbers)

// forEach(): lặp qua từng phần tử của mảng, dùng callback, ko thay đổi mảng cũ
numbers.forEach((number, index) => {
    console.log(`Index: ${index} - Value: ${number} `)
})

// map(): tạo 1 mảng mới với những phần tử được biến đổi từ mảng gốc, không làm thay đổi mảng gốc
let squaredNumbers = numbers.map((number) => number * number)
console.log('After map() - squaredNumbers: ', squaredNumbers)

// filter(): tạo ra 1 mảng mới với các phần tử thỏa mãn điều kiện, mảng gốc ko thay đổi
let evenNumbers = numbers.filter((number) => number % 2 === 0)
console.log('After filter() - evenNumbers: ', evenNumbers)

// find(): tìm phần tử đầu tiên thỏa mãn điều kiện, không thay đổi mảng gốc
let foundNumber = numbers.find((number) => number > 3)
console.log('After find() - foundNumber: ', foundNumber)

// reduce(): tính toán 1 giá trị duy nhất từ mảng, giá trị trả về có thể là số hoặc object
let sum = numbers.reduce((total, number) => (total + number), 10)
console.log('After reduce() - sum: ', sum)

// some(): kiểm tra xem mảng có ít nhất 1 phần tử thỏa mãn điều kiện hay không, trả về boolean true/false
let hasEvenNumber = numbers.some((number) => {
    console.log('Test method some(): ', number)
    return number % 2 === 0
})
console.log('After some() - hasEvenNumber: ', hasEvenNumber)