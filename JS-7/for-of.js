// for-of: dùng để lặp qua các giá trị của 1 iterable object (nhũng đối tượng có thể lặp), phổ biển như Array, String..vv
// for-of: không dùng được cho object

let colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink']

for (let color of colors) (
    console.log(`Color: ${color}`)
)

let username = 'quang2802 - dang hoc lap trinh'
for (let char of username) {
    console.log(`Char: ${char}`)
}