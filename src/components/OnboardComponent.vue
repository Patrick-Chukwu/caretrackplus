<template>
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

    <div class="row form_box">
    <label class="label" for="auname">Admin User Name</label>
    <input type="text"  id="auname" >
  </div>

    <div class="row form_box">
    <label class="label" for="password">Password</label>
    <input type="password"  id="password" >
  </div>

    <div class="row form_box">
    <label class="label" for="confirmpassword">Confirm Password</label>
    <input type="password"  id="confirmpassword" >
  </div>

    <div class="row form_box">
    <label class="label last_label" for="hospitallogo">Upload Hospital Logo</label>
    <label for="fileToUpload" class="custom-file-upload">
            <span class="row onboard_upload">
                <!-- Your custom icon here -->
                <img src="@/assets/upload.png" alt="Upload Icon">
                <p class="upload_text">Upload</p>

            </span>

        </label>
    <input class="default_upload" type="file"  id="hospitallogo" placeholder="type">
  </div>

  </form>
  <button type="submit" class="button">Onboard</button>
  <h3 class="small_text footer">Powered by Caretrack+</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OnboardComponent',
  }
  </script>
 