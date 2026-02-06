function checkVIP() {
    var code = document.getElementById("vipcode").value;
    if (code === "1234") {
        window.location.href = "vip.html";
    } else {
        alert("Siz VIP emassiz ❌");
    }
}