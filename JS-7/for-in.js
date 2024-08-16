// for-in: lặp qua các thuộc tính của 1 đối tượng

let developer = {
    name: 'quang',
    age: 22,
    gender: 'male',
    country: 'Vietnam'
}

for (let key in developer) {
    console.log(`${key}: ${developer[key]}`)
}