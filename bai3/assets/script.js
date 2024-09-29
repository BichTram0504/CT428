const nameElement = document.getElementById('name');
        let clickCount = 0;

        // Thay đổi màu nền khi di chuột vào
        nameElement.addEventListener('mouseover', function() {
            nameElement.style.backgroundColor = 'lightblue';
        });

        // Khôi phục màu nền khi di chuột ra
        nameElement.addEventListener('mouseout', function() {
            nameElement.style.backgroundColor = '';
        });

        // Hiển thị thông báo và đếm số lần nhấp chuột
        nameElement.addEventListener('click', function() {
            clickCount++;
            alert('Bạn đã nhấp vào tên ' + clickCount + ' lần!');
        });