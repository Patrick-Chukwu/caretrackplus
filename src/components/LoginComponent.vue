<template>
    <div class="row login_page">

  <div class="column login_page-left">
    <div class="column loginpage_box">
        <img class="client_logo" src="@/assets/gracelogo.svg" alt="Grace Hospital Logo">
        <h3 class="client_name ">Grace Hospital</h3>
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
   <h3 class="footer">Powered by Caretrack+</h3>
  </div>
 
   <div class=" login_page-right">
    <img class="nurse_image" src="@/assets/lady.png" alt="Nurse Image">
  </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginComponent',
  }
  </script>
 