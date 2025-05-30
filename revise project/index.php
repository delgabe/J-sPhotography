<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Photography Studio Login</title>
    <link rel="stylesheet" href="CSS/loginstyle.css" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    </style>
  </head>
  <body>
    <div class="login-card">
      <!-- Logo -->
      <div class="logo-wrapper">
        <img src="image/logo.png" alt="Studio Logo" class="logo" />
      </div>

      <h1>Login to your Account</h1>

      <form action="home.php">
        <div class="login-form">
          <label for="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div class="login-form">
          <label for="password">Password</label>
          <input type="password" id="password" required />
          <span class="toggle-password" onclick="togglePassword()"
            >Show Password</span
          >
        </div>
        <button type="submit" class="btn">Sign In</button>
      </form>
      <p class="signup-text">Don't have an account? <a href="#">Sign up</a></p>
    </div>

    <nav class="navbar">
      <form action="home.php">
        <button class="skip-btn">Skip Login</button>
      </form>
    </nav>

    <script src="Javascript/loginscript.js"></script>
  </body>
</html>