// Anonymus function: hàm ẩn danh là hàm không có tên. Thường được sử dụng làm đối số cho các hàm khác, ví dụ như trong các hàm xử lý sự kiện hoặc hàm gọi lại - callback

// khởi tạo function
setTimeout(function () {
    console.log('sau 1 giây thì hiện dòng message này.')
}, 1000)

// function làm đối số của hàm setTimeout là anonymous function
