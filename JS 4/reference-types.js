// Nhóm các kiểu dữ liệu tham chiếu - Reference Types
// Các giá trị tham chiếu không được lưu trữ trực tiếp trong ngắn xếp - stack mà sẽ tham chiếu đến đại chỉ của đối tượng trong Heap Memory
// Các giá trị tham chiếu có thể được thay đổi sau khi chúng được tạo ra
// Khi gán 1 đối tượng A cho B, thì cả A VÀ B sẽ tham chiếu đến cùng 1 đối tượng, chứ không tạo ra bản sao độc lập riêng biệt.
// Bao gồm các kiểu dữ liệu phổ biến sau:

// Object (đối tượng): Đại diện cho 1 tập hợp các thuộc tính và phương thức.
// Array (Mảng): Một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị
// Function: Đại diện cho các hàm xử lý, cũng được coi là 1 loại đối tượng đặc biệt.
