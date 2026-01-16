// js/supabase.js

// 1. Khai báo thông tin dự án (Lấy từ bạn vừa cung cấp)
const SUPABASE_URL = 'https://iskbppjbfugeshpyrekn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlza2JwcGpiZnVnZXNocHlyZWtuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg1NzEzMDgsImV4cCI6MjA4NDE0NzMwOH0.77a9WJg0LTHA_kKpaej11P18fVUtoT0-jVOgjMpCcc8';

// 2. Khởi tạo Client (Sử dụng thư viện supabase-js từ CDN trong HTML)
// Biến này sẽ được dùng chung cho toàn bộ dự án
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 3. Hàm tiện ích: Định dạng tiền Việt Nam
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// 4. Hàm tiện ích: Lấy tham số từ URL (Ví dụ: ?id=1)
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
