// những phương thức quan trọng và được dùng nhiều với String trong thực tế:
// phần 1: charAt(), concat(), includes(), indexOf(), slice(), split(), substring()

// charAt(): trả về ký tự tại 1 vị trí cụ thể trong chuỗi. Vị trí bắt đầu từ 0, trả về string rỗng nếu vị trí không tồn tại

const str1 = 'hello world'
console.log(str1.charAt(0))
console.log(str1.charAt(1))
console.log(str1.charAt(2))
console.log(str1.charAt(3))

// concat(): nối 2 hoặc nhiều chuỗi với nhau và trả về 1 chuỗi mới
const str2 = 'quang2802'
const separator = ' - '
const str3 = 'đang học lập trình'
const concatResult = str2.concat(separator).concat(str3)
console.log('After concat(): ', concatResult)

// includes(): kiểm tra xem chuỗi có chứa 1 chuỗi con cụ thể hay không
// trả về true nếu chuỗi con được tìm thấy, trả về false nếu ko tìm thấy
// có phân biệt chữ hoa và thường
const str4 = 'quang2802'
const includesResult = str4.includes('quang')
console.log('After includes(): ', includesResult)

// indexOf(): trả về index của lần xuất hiện đầu tiên của chuỗi con trong chuỗi.
// nếu chuỗi con không được tìm thấy thì trả về -1
const str5 = 'quang2802'
const indexOfResult = str5.indexOf('quang')
console.log('After indexOf(): ', indexOfResult)

// split(): chia chuỗi thành 1 mảng các chuỗi con dựa trên 1 ký tự nhận diện
// không làm thay đổi chuỗi gốc ban đầu
const str6 = 'JS,TS,React,Node,Express,Quang2802'
const splitResult = str6.split(',')
console.log('After split(): ', splitResult)

// slice(): trả về 1 chuỗi con từ 1 chuỗi gốc ban đầu, từ vị trí startIndex đến endIndex (ko bao gồm endIndex)
// không làm thay đổi chuỗi gốc ban đầu. Nếu cố tình để start > end thì slice sẽ trả về chuỗi rỗng
const str7 = 'JavaScript is fun but not easy at all'
const sliceResult = str7.slice(3, 7)
console.log('After slice(): ', sliceResult)

// substring(): giống với slice(), tuy nhiên có 1 điểm khác là nó sẽ hoán đổi start và end nếu chũng ta vô tình để strart>end
const str8 = 'JavaScript is fun but not easy at all'
const subStringResult = str8.substring(13, 7)
console.log('After subString(): ', subStringResult)
