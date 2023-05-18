// Import Firebase SDK và cấu hình kết nối Firebase
import firebase from 'firebase/app';
import 'firebase/storage';

// Cấu hình thông tin kết nối Firebase
const firebaseConfig = {
  // Thêm thông tin cấu hình Firebase của bạn tại đây
};

// Khởi tạo ứng dụng Firebase
firebase.initializeApp(firebaseConfig);

// Lấy tham chiếu đến Firebase Storage
const storage = firebase.storage();

// Sửa đổi tệp trên Firebase Storage
function modifyFile(filename, newContent) {
  // Lấy tham chiếu đến tệp trên Firebase Storage
  const fileRef = storage.ref().child(filename);

  // Thực hiện việc sửa đổi tệp
  fileRef.putString(newContent)
    .then(() => {
      console.log('Sửa đổi tệp thành công!');
    })
    .catch((error) => {
      console.error('Lỗi khi sửa đổi tệp:', error);
    });
}

// Xóa tệp trên Firebase Storage
function deleteFile(filename) {
  // Lấy tham chiếu đến tệp trên Firebase Storage
  const fileRef = storage.ref().child(filename);

  // Thực hiện việc xóa tệp
  fileRef.delete()
    .then(() => {
      console.log('Xóa tệp thành công!');
    })
    .catch((error) => {
      console.error('Lỗi khi xóa tệp:', error);
    });
}

// Gọi hàm sửa đổi tệp
modifyFile('path/to/file.txt', 'Nội dung mới của tệp');

// Gọi hàm xóa tệp
deleteFile('path/to/file.txt');
