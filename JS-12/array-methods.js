// phần 2: concat(), slice(), splice(), every(), findIndex(), toString(), join()

// concat(): dùng để nối 2 hoặc nhiều mảng lại với nhau, không làm thay đổi amngr gốc
// và trả về 1 mảng mới chứa các mảng được nối

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const concatResult = arr1.concat(arr2)
console.log('After concat(): ', concatResult)

// slice(): trả về 1 mảng con của mảng ban đầu, từ vị trí startIndex đến endIndex(sẽ ko bao gồm endIndex). không làm thay đổi mảng gốc ban đầu
const arr3 = [1, 2, 3, 4, 5, 6]
const sliceResult = arr3.slice(1, 4)
console.log('After slice(): ', sliceResult)

// splice(): dùng để thay đổi nội dung của mảng bằng cách xóa, thay thế hoặc thêm phần tử mới. sẽ làm thay đổi mảng gốc ban đầu
// nếu ko truyền đối số thì mảng gốc ko thay đổi gì, trả về 1 mảng rỗng
// nếu truyền đối số thì có thể có 1 hoặc 2 đối số
// nếu truyền 1 đối số thì sẽ cắt mảng từ index đó đến cuối mảng
// nếu truyền 2 đối số thì sẽ cắt 1 số phần tử bắt đầu từ vị trí bắt đầu
const arr4 = [1, 2, 3, 4, 5, 6]
const spliceResult = arr4.splice()
console.log('After splice(): ', spliceResult) // trả về mảng rỗng
console.log('After splice() arr4: ', arr4) // trả về mảng gốc chưa thay đổi gì

const spliceResult1 = arr4.splice(2)
console.log('After splice(): ', spliceResult1) // [3,4,5,6]
console.log('After splice() arr4: ', arr4) // [1,2]

const spliceResult2 = arr4.splice(2, 3)
console.log('After splice(): ', spliceResult2) // [3,4,5]
console.log('After splice() arr4: ', arr4) // [1,2,6]

const spliceResult3 = arr4.splice(2, 3, 'a', 'b', 'c')
console.log('After splice(): ', spliceResult3) // [3,4,5]
console.log('After splice() arr4: ', arr4) // [1,2,'a','b','c',6]


// every(): kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện của hàm callback hay không
// trả về true - false
const arr5 = [1, 2, 3, 4, 5, 6]
const allPositive = arr5.every(num => num > 0)
console.log('After every(): ', allPositive)

// findIndex(): trả về chỉ số index của phần tử đầu tiên trong mảng thỏa mãn điều kiện trong hàm callback
// nếu không có phần tử nào thỏa mãn thì trả về -1
const arr6 = [1, 2, 3, 4, 5, 6]
const findIndexResult = arr6.findIndex(num => num > 3)
console.log('After findIndex(): ', findIndexResult) // kết quả: 3 - là vị trí (index) của kết quả

// trString(): 
const arr7 = [1, 2, 3, 4, 5, 6]
const toStringReslt = arr6.toString()
console.log('After toString(): ', toStringReslt) // kết quả: "1,2,3,4,5,6"

// join(): nối tất cả các phần tử trong mảng thành 1 chuối string (khác với tpString() ở điểm có thể chỉ định thêm dấu phần cách)
const arr8 = [1, 2, 3, 4, 5, 6]
const joinResult = arr8.join('')
console.log('After join(): ', joinResult)