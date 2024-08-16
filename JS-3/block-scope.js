// Scope - phạm vi: được xác định bởi dấu {}
const testScope = () => {
    {
        var scopeVar = 'scopeVar - Var'
        var scopeLet = 'scopeLet - Let'
        var scopeConst = 'scopeConst - Const'
        console.log('scopeVar', scopeVar)
        console.log('scopeLet', scopeLet)
        console.log('scopeConst', scopeConst)
    }
    console.log('scopeVar', scopeVar)
    console.log('scopeLet', scopeLet)
    console.log('scopeConst', scopeConst)

}

// Kết luận về scope -- phạm vi một khối:
// Biến khai báo bằng let và const có phạm vi trong một khối,
// có nghĩa là nó chỉ tốn tại trong khối mã mà nó được khai báo.
// Biến khai báo bằng var có 2 trường hợp:
// Phạm vi toàn cục nếu nó được khai báo bên ngoài bất kì hàm nào (ngoài cùng của file)
// Phạm vi cụ thể trong một hàm nếu nó được khai báo bên trong một hàm. Điều này khiến cho var
// có scope lỏng lẻo. Vậy nên thực tế hiện tại chủ yếu chúng ta dùng let và const để khai báo biến
// tránh các vấn đề liên quan tới scoe của var.

// Let và const xuất hiện từ khi có phiên bản ổn định ES6 vào tháng 6 năm 2015 còn var có từ khi JavaScript được ra đời
