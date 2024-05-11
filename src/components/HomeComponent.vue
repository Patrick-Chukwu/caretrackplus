<template>
  <div class="home column">
    <div class="hero column">
      <nav class="navbar row">
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

          <router-link to="/onboard" class="button">Try for free</router-link>
          <router-link to="/login" class="button">Login</router-link>


        </div>
      </nav>
      <div class="hero_images">
        <img class="pattern_image" src="@/assets/pattern.png" alt="Pattern image">
        <img class="plus_image" src="@/assets/plus.png" alt="Plus image">

      </div>
      <section class="hero_text">
   <h1 class="biggest_text">Revolutionize Healthcare Operations <span class="big_span">by integrating and optimizing key processes.</span></h1>
    <p class="paragraph">With a focus on patient-centric care, efficiency, and data-driven decision-making, CareTrack+ is a software solution designed to streamline and optimise healthcare operations, enhance patient care delivery, and improve overall efficiency within healthcare facilities.</p>

</section>
<img src="@/assets/mockup.png" alt="CareTrack+ Dashboard Mockup" class="mockup">
  </div>
    <main>
      <section class="impact column">
        <div class="row impact_boxes">
  <div class="column impact_box">
    <h2 class="impact_number">500+ </h2>
    <p class="impact_texts">Active Hospitals</p>
  </div>

  <div class="column impact_box">
    <h2 class="impact_number">3000+ </h2>
    <p class="impact_texts">Active Patients</p>
  </div>
  <div class="column impact_box">
    <h2 class="impact_number">1000+ </h2>
    <p class="impact_texts">Active Doctors</p>
  </div>
  <div class="column impact_box">
    <h2 class="impact_number">800+ </h2>
    <p class="impact_texts">Active Nurse</p>
  </div>
</div> 
<div>
  <router-link to="/onboard" class="button">Get started</router-link>
</div>
      </section>

      <section class="column spectrum">
        <h2 class="big_text">
          Unlock The Full Spectrum Of Healthcare Management With Our All-In-One Solution
        </h2>
        <p class="paragraph">
          With CareTrack+, healthcare providers can efficiently manage patient appointments, electronic health records (EHR), prescriptions, and laboratory tests, ensuring accurate and timely documentation of patient information. The system also includes features for inventory management, staff scheduling, and financial reporting, empowering healthcare organisations to optimise resource allocation and financial performance.
        </p>
      </section>
      <section class="column testimonial">
      <div class="column testimonail_first">
        <p>TESTIMONIALS</p>
        <h2>Our Customer Success Stories</h2>
      </div>
      <div class="row testimonial_boxes">

        <!-- first_box -->
        <div class="column testimonial_box">
          <div class="doctor_box">
            <img class="doctor_icon" src="../assets/doctor.png" alt="Doctor">

          </div>
          <p class="paragraph">It’s easy with CareTrack+ to track the client’s insulin reports and foster a collaborative environment among endocrinologists</p>
          <div class="column doctor_rating">
            <h3>Dr. Pradip Dalwadi</h3>
            <img class="star_icon" src="../assets/star.png" alt="star rating">
          </div>
          <div class="doctor_portfolio">
            <h4>Endocrinologist and Diabetologist</h4>
            <p class="paragraph">
              Pratham Endocrine & Diabetes Centre
            </p>
          </div>
        </div>
        <!-- second_box -->
        <div class="column testimonial_box">
          <div class="doctor_box">
            <img class="doctor_icon" src="../assets/doctor.png" alt="Doctor">

          </div>          
          <p class="paragraph">It’s easy with CareTrack+ to track the client’s insulin reports and foster a collaborative environment among endocrinologists</p>
          <div class="column doctor_rating">
            <h3>Dr. Pradip Dalwadi</h3>
            <img class="star_icon" src="../assets/star.png" alt="star rating">
          </div>
          <div class="doctor_portfolio">
            <h4>Endocrinologist and Diabetologist</h4>
            <p class="paragraph">
              Pratham Endocrine & Diabetes Centre
            </p>
          </div>
        </div>
        <!-- third box -->
        <div class="column testimonial_box">
          <div class="doctor_box">
            <img class="doctor_icon" src="../assets/doctor.png" alt="Doctor">

          </div>          
          <p class="paragraph">It’s easy with CareTrack+ to track the client’s insulin reports and foster a collaborative environment among endocrinologists</p>
          <div class="column doctor_rating">
            <h3>Dr. Pradip Dalwadi</h3>
            <img class="star_icon" src="../assets/star.png" alt="star rating">
          </div>
          <div class="doctor_portfolio">
            <h4>Endocrinologist and Diabetologist</h4>
            <p class="paragraph">
              Pratham Endocrine & Diabetes Centre
            </p>
          </div>
        </div>
      </div>
      </section>
      <section class="column cta">
        <h3>Let’s get you started.</h3>
        <p>Join Hospitals across Africa that rely on CareTrack+ <br>
to run a smooth administration and management process.</p>
<router-link to="/onboard" class="button">Get started</router-link>
      </section>
    </main>
   
<footer class="row footer">
<div class="footer_left">
  <p>Copyright © 2024 CareTrack+. All rights reserved.</p>
</div>
<div class="row footer_right">
<img src="../assets/fb.png" alt="Facebook logo">
<img src="../assets/ig.png" alt="Instagram logo">
<p>CareTrack+</p>
</div>
</footer>

  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
}
</script>
