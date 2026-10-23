function validateForm() {
    let isValid = true;

    // 1. Kiểm tra Họ và tên
    const fullname = document.getElementById("fullname").value;
    if (fullname === "") {
        showError("group-fullname", "✗ Họ tên không được để trống");
        isValid = false;
    } else {
        showSuccess("group-fullname", "✓ Hợp lệ");
    }

    // 2. Kiểm tra Email
    const email = document.getElementById("email").value;
    if (email === "") {
        showError("group-email", "✗ Email không được để trống");
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        showError("group-email", "✗ Email không hợp lệ (thiếu tên miền)");
        isValid = false;
    } else {
        showSuccess("group-email", "✓ Hợp lệ");
    }

    // 3. Kiểm tra Mật khẩu
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        showError("group-password", "✗ Mật khẩu phải có ít nhất 6 ký tự");
        isValid = false;
    } else {
        showSuccess("group-password", "✓ Hợp lệ");
    }

    // 4. Kiểm tra Xác nhận mật khẩu
    const confirmPass = document.getElementById("confirm-password").value;
    if (confirmPass === "" || confirmPass !== password) {
        showError("group-confirm", "✗ Mật khẩu xác nhận không khớp");
        isValid = false;
    } else {
        showSuccess("group-confirm", "✓ Hợp lệ");
    }

    return isValid;
}

function showError(id, text) {
    const box = document.getElementById(id);
    box.className = "form-group error";
    box.querySelector(".msg").innerText = text;
}

function showSuccess(id, text) {
    const box = document.getElementById(id);
    box.className = "form-group success";
    box.querySelector(".msg").innerText = text;
}