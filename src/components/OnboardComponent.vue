import '../styles/stylees.css'
<template>
    <div class="hello">
      <h2>We are happy to
  have you <span class="reverse">onboard</span></h2>
  <form action="" class="onboard_form column">
<div class="row form_box">
  <label for="hname">Hospital Name</label>
    <input type="text"  id="name" >
</div>
<div class="row form_box">
    <label for="email">Email</label>
    <input type="email"  id="email" >
  </div>
  <div class="row form_box">

    <label for="number">Phone Number</label>
    <input type="Number"  id="number" >
  </div>

    <div class="row form_box">
    <label for="auname">Admin User Name</label>
    <input type="text"  id="auname" >
  </div>

    <div class="row form_box">
    <label for="password">Password</label>
    <input type="password"  id="password" >
  </div>

    <div class="row form_box">
    <label for="confirmpassword">Confirm Password</label>
    <input type="password"  id="confirmpassword" >
  </div>

    <div class="row form_box">
    <label for="hospitallogo">Upload Hospital Logo</label>
    <input type="file"  id="hospitallogo" placeholder="type">
  </div>

  </form>
  <button type="submit" :class="button">Onboard</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OnboardComponent',
  }
  </script>
  
  <style scoped>
  h2 {
    margin: 100px 0;
  }
  .row {
    display: flex;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  form {
    margin-bottom: 50px;
  }
  .form_box {
    justify-content: center;
    width: 70%;
    margin: 0 auto;
    gap: 10px;
    
    /* border: 1px solid var(--secondary-color); */
  }
label {
width: 252px;
border-radius: 10px;
background-color: var(--primary-color);
color: var(--secondary-color);
text-align: left;
padding: .2rem .3rem;
/* height: */
  }
  input {
    width: 150px;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  