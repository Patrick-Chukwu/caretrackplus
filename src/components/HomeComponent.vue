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
          <router-link to="/login" class="button">Login</router-link>

          <router-link to="/onboard" class="button">Get started</router-link>

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
    </main>
   


  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
}
</script>
