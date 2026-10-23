document.addEventListener('DOMContentLoaded', function() {
    const btnPrint = document.getElementById('btn-print');

    // Xử lý sự kiện bấm nút "In lịch" dùng addEventListener
    btnPrint.addEventListener('click', function() {
        const day = parseInt(document.getElementById('input-day').value);
        const month = parseInt(document.getElementById('input-month').value);
        const year = parseInt(document.getElementById('input-year').value);

        if (!day || !month || !year) return;

        // Dùng đối tượng Date để xác định thứ
        const date = new Date(year, month - 1, day);
        const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
        
        document.getElementById('year').textContent = year;
        document.getElementById('month').textContent = 'Tháng ' + month;
        document.getElementById('day-number').textContent = day;
        document.getElementById('day-name').textContent = daysOfWeek[date.getDay()];

        // Dùng getHours() lấy giờ hiện tại để đưa ra lời chào theo buổi
        const hour = new Date().getHours();
        let greetingText = 'Chào buổi sáng!';
        if (hour >= 11 && hour < 13) greetingText = 'Chào buổi trưa!';
        else if (hour >= 13 && hour < 18) greetingText = 'Chào buổi chiều!';
        else if (hour >= 18 || hour < 5) greetingText = 'Chào buổi tối!';

        document.getElementById('greeting').textContent = greetingText;
    });
});