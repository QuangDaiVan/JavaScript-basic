// Constructor function: hàm khởi tạo, dùng để tạo đối tượng mới và thường kết hợp cới từ khóa new

function Developer(username) {
    this.username = username
    this.greet = function () {
        console.log(`Hi Aliens, I am ${this.username} from the planet Earth.`)
    }
}

const quang2802 = new Developer('quang2802')
quang2802.greet()

const minhanh1806 = new Developer('minhanh1806')
minhanh1806.greet()