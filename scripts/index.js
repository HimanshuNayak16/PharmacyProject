window.onload = () => {
  if (localStorage.getItem("loginStatus") == "true") {
    location.assign("./orders.html");
  }
  let loginForm = document.getElementById("login-form");
  loginForm.onsubmit = function (e) {
    e.preventDefault();
    console.log(this);
    let loginCredential = {
      username: this.username.value,
      password: this.password.value,
    };
    if (
      loginCredential.username === "qaifi" &&
      loginCredential.password === "qaifi"
    ) {
      alert("Login Successful!!");
      localStorage.setItem("loginStatus", true);
      location.replace("./orders.html");
    } else {
      alert(
        `Please Enter Valid Credentials ${loginCredential.username} ${loginCredential.password}`
      );
    }
  };
};
