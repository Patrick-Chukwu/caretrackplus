<template>

    <div class="row login_page">

  <div class="column login_page-left">
    <div class="column loginpage_box">
        <img class="client_logo" src="@/assets/gracelogo.svg" alt="Mayo Clinic Logo">
    </div>

   <form class="column login_form" action="">
    <!-- <select class="input login_input" name="role" id="role">
      <option disabled selected value="userrole">User Role</option>
      <option value="admin">Admin</option>
      <option value="doctor">Doctor</option>
      <option value="nurse">Nurse</option>
      <option value="receptionist">Reception</option>
      <option value="pharmacy">Pharmacy</option>
      <option value="pharmacy">Laboratory</option>




    </select> -->
    <input class="login login_input" type="text" name="userid" id="userid" placeholder="User ID">
    <input class="login login_input" type="password" name="password" id="password" placeholder="Password">
   </form>

   <div class="column loginpage_box">
    <button class="button">Login</button>
    <p class="medium_text forgot_password">Forgot Password?</p>
   </div>
   <footer class="row login_footer">
    <button class="change_team">Change Theme</button>
    <div class="row powered_by">
      <h3 class="footer_text">Powered by:</h3>
    <router-link to="/" class="logo_box"><h3>CareTrack <span style="color: var(--secondary-color);">+</span></h3></router-link>
    </div>
 
   </footer>
  </div>
 
   <div class=" login_page-right">
    <img class="login-pattern" src="@/assets/login-pattern.png" alt="Nurse Image">
    <img class="login-pattern2" src="@/assets/login-pattern2.png" alt="Nurse Image">
    <img class="nurse_image" src="@/assets/lady.png" alt="Nurse Image">
  </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginComponent',
  }
  </script>
 