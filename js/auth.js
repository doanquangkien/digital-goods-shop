// js/auth.js

// 1. Hàm kiểm tra phiên đăng nhập
async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();

    // Nếu đang ở trang Login (index.html) mà đã đăng nhập -> Chuyển vào Dashboard
    if (window.location.pathname.includes('/admin/index.html') && session) {
        window.location.href = '/admin/dashboard.html';
    }

    // Nếu đang ở các trang Admin khác mà CHƯA đăng nhập -> Đá về Login
    if (!window.location.pathname.includes('/admin/index.html') && !session) {
        window.location.href = '/admin/index.html';
    }
}

// 2. Hàm Đăng xuất
async function logout() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
        window.location.href = '/admin/index.html';
    }
}

// Chạy kiểm tra ngay khi tải file
checkAuth();
