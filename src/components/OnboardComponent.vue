<template>
   <nav class="navbar_onboard row">
        <router-link to="/" class="logo_box">
          <img class="logo" src="../../public/logofull.svg" alt="CareTrack+ logo">
        </router-link>
        <div class="nav_menus row">
  <router-link to="/onboard" class="nav_menu">Solution</router-link>
  <router-link to="/login" class="nav_menu">Pricing</router-link>
  <router-link to="/onboard" class="nav_menu">Resources</router-link>
  <router-link to="/contact" class="nav_menu">Contact</router-link>
        </div>
        <div class="nav_buttons row">
          <router-link to="/login" class="button">Login</router-link>

          <!-- <router-link to="/onboard" class="button">Sign up</router-link> -->

        </div>
      </nav>
    <div class="column onboard">
      <h2 class="big_text">We are happy to
  have you <span class="red_text">onboard</span></h2>
  <form action="" class="onboard_form column">
<div class="row form_box">
  <label class="label" for="hname">Hospital Name</label>
    <input type="text"  id="name" >
</div>
<div class="row form_box">
    <label class="label" for="email">Email</label>
    <input type="email"  id="email" >
  </div>
  <div class="row form_box">

    <label class="label" for="number">Phone Number</label>
    <input type="Number"  id="number" >
  </div>
<!-- 
    <div class="row form_box">
    <label class="label" for="auname">Admin User Name</label>
    <input type="text"  id="auname" >
  </div> -->

    <!-- <div class="row form_box">
    <label class="label" for="password">Password</label>
    <input type="password"  id="password" >
  </div> -->

    <div class="row form_box">
    <!-- <label class="label" for="confirmpassword">Confirm Password</label>
    <input type="password"  id="confirmpassword" > -->
    <label for="upload">Upload logo</label>
    <input type="file" name="upload" id="upload" placeholder="Add file">
  </div>

    <div class="row form_box">
    <label class="label last_label" for="hospitallogo">Upload Hospital Logo</label>
    <label for="hospitallogo" class="custom-file-upload">
            <span class="row onboard_upload">
                <!-- Your custom icon here -->
                <img src="@/assets/upload.png" alt="Upload Icon">
                <p class="upload_text">Upload</p>

            </span>

        </label>
    <input class="default_upload" type="file"  id="hospitallogo" placeholder="type">
  </div>
  <button type="submit" class="button onboard_button" onclick="alert('Welcome onboard!')">Onboard</button>
  </form>

  <div class="row powered_by">
      <h3 class="footer_text">Powered by:</h3>
    <router-link to="/" class="logo_box"><h3 style="color: var(--primary-color);">CareTrack <span style="color: var(--secondary-color);">+</span></h3></router-link>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OnboardComponent',
  }
  </script>
 