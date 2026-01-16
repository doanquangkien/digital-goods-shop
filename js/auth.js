// js/auth.js

async function protectRoute() {
    // 1. Kiểm tra session hiện tại
    const { data: { session } } = await supabase.auth.getSession();
    
    const isLoginPage = window.location.pathname.includes('/admin/index.html');
    const isAdminPage = window.location.pathname.includes('/admin/') && !isLoginPage;

    // 2. Logic điều hướng
    if (isAdminPage && !session) {
        // Nếu vào trang admin mà chưa login -> Đá về trang login ngay lập tức
        window.location.href = '/admin/index.html';
        return;
    }

    if (isLoginPage && session) {
        // Nếu đã login mà cố vào trang login -> Đá vào dashboard
        window.location.href = '/admin/dashboard.html';
        return;
    }

    // 3. Nếu mọi thứ hợp lệ, cho phép hiện nội dung trang
    document.body.style.visibility = 'visible';
}

// Mặc định ẩn trang web để tránh lộ nội dung khi chưa check xong
document.body.style.visibility = 'hidden';

// Chạy kiểm tra
protectRoute();

// Hàm đăng xuất
async function logout() {
    await supabase.auth.signOut();
    window.location.href = '/admin/index.html';
}
