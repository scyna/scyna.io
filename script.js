document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    // Kiểm tra xem người dùng đã đồng ý cookie chưa
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.style.display = 'block';
    }

    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.style.display = 'none';
        // Ở đây bạn có thể thêm logic để bật cookie
    });

    rejectButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieConsent.style.display = 'none';
        // Ở đây bạn có thể thêm logic để tắt cookie không cần thiết
    });
});