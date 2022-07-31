<?php
  session_start();
  if (isset($_SESSION['unique_id'])) {
    header("location: users.php");
  }
?>

<?php include_once "./header.php"; ?>
  <body>
    <div class="wrapper">
      <section class="form login">
        <header>Realtime Chat App</header>
        <form action="#">
          <div class="error-txt"></div>
          <div class="field input">
            <label>Email Address</label>
            <input type="text" name="email" placeholder="Enter your Email" />
          </div>
          <div class="field input">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter new password" />
            <i class="fas fa-eye"></i>
          </div>
          <div class="field button">
            <input type="submit" value="Continue to Chat" />
          </div>
        </form>
        <div class="link">Not signed up yet? <a href="index.php">SignUp</a></div>
      </section>
    </div>
    <script src="./Js/pass-show-hide.js"></script>
    <script src="./Js/login.js"></script>
  </body>
</html>
