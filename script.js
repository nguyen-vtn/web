function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "123456") {
    window.location.href = "home.html";
  } else {
    alert("Sai mật khẩu!");
  }
}
