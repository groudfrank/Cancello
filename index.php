<?php include 
'php/login.php'
// 'js/main.js;';
?>
<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8">
<meta name="Lorem Ipsum" content="Lorem Ipsum">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:site_name" content="www.loremipsum.com">
<meta property="og:title" content="Lorem Ipsum">
<meta property="og:image" content="https://i.imgur.com/0aAmyHS.jpg">
<meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat.">
<meta property="og:url" content="www.loremipsum.com">
<meta property="og:type" content="website">
<meta name="twitter:title" content="Lorem Ipsum">
<meta name="twitter:description" content="Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat.">
<meta name="twitter:image" content="https://i.imgur.com/0aAmyHS.jpg">
<meta name="twitter:site" content="@loremipsum">
<meta name="twitter:creator" content="@groudfrank">
<meta name="theme-color" content="#000000">
<meta name="Lorem Ipsum" content="Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat.">
<link rel="shortcut icon" type="image/x-icon" href="img/favicon.ico">
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
<head>
<title>Cancello</title>
</head>
<body>
<div id="pseudo-body" class="bg-theme">
<div id="login-card" class="login-wrapper">
  <div class="login-banner txt-highlight border-right-md global-theme-negative">
      <h3> 
      <?php 
      $hour = date('H', time());
      echo greeting($hour);?>, Ema
      </h3>
  </div>
<form method="POST" action="inventory.php" class="global-theme">
    <div class="login-avatar-wrapper">
      <figure class="login-avatar bg-theme">
        <img src="img/ema.jpeg">
      </figure>
    </div>
  <div class="input-field-wrapper">
    <div class="input-field-icon-wrapper global-theme-negative">
        <i class="fas fa-user"></i>
    </div>
    <input id="login-username" type="text" name="username" placeholder="Username" 
    class="input-field-styles global-theme-contrast">
    <div id="username-input-dialog" class="login-input-dialog hide-me">
    <i class="fas fa-exclamation-triangle"></i>
    <p></p>
    </div>
  </div>
  <br>
  <div class="input-field-wrapper">
      <div class="input-field-icon-wrapper global-theme-negative">
          <i class="fas fa-unlock"></i>
      </div>
    <input type="password" name="password" placeholder="Password"
    class="input-field-styles global-theme-contrast">
    <div class="login-input-dialog hide-me">
    <i class="fas fa-exclamation-triangle"></i>
    <p></p>
    </div>
  </div>
  <br>
  <input type="submit" name="login" value="Login" class="input-submit-style txt-highlight btn-global-theme border-sm">
  <br>
  <a href="#" id="form-pwd-recovery" class="txt-highlight">Forgot password?</a>
</form>
</div>
<div class="login-settings-btn" title="settings">
  <i class="fas fa-sliders-h"></i>
</div>
<div id="login-settings-menu-wrapper" class="toggle-show visibility">
<div class="login-settings-component-wrapper login-settings-component global-theme-contrast">
    <div class="banner-sm txt-highlight">
        <h5>Light Mode</h5>
    </div>
    <div id="login-mode-selector">
      <div class="global-theme-toggle-wrapper toggle-off">
        <div class="global-theme-toggle global-theme-negative"></div>
      </div>
    </div>
</div>
<div class="login-settings-component-wrapper login-settings-component global-theme-contrast">
      <div class="banner-sm txt-highlight">
          <h5>Colors</h5>
      </div>
      <div id="login-theme-selector">
        <div id="sunset" class="color-palette bg-theme-sunset"></div>
        <div id="plum-plate" class="color-palette bg-theme-plum-plate"></div>
        <div id="sunrise" class="color-palette bg-theme-sunrise"></div>
        <div id="intuitive-purple" class="color-palette bg-theme-intuitive-purple"></div>
        <div id="quepal" class="color-palette bg-theme-quepal"></div>
        <div id="glacia" class="color-palette bg-theme-glacia"></div>
        <div id="sakura" class="color-palette bg-theme-sakura"></div>
        <div id="cement" class="color-palette bg-theme-cement"></div>
        <div id="dirt" class="color-palette bg-theme-dirt"></div>
        <div id="passion" class="color-palette bg-theme-passion"></div>
      </div>
  </div>
</div>
</div>
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>
<script src="js/main.js"></script>
<script src="js/logic.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/blazy/1.8.2/blazy.min.js"></script>
</body>
</html>
