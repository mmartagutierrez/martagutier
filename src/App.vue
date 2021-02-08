<template>
  <div id="app">
    <div class="navbar padding uppercase">
      <div class="m-logo"><div>M Here</div></div>
      <div class="design navbar-item"><language phrase="design" /></div>
      <div class="about navbar-item"><language phrase="about_me" /></div>
      <div class="contact navbar-item">
        <language phrase="contact" />
      </div>
      <div class="navbar-item"><language-switch /></div>
    </div>
    <div class="header strong">
      <div class="message padding">
        <language phrase="header_message" />
      </div>
      <div class="topics uppercase centered">
        <div class="line-1 centered">
          <div class="topic centered">
            <language phrase="graphic_design" />
          </div>
          <div class="topic centered">
            <language phrase="branding" />
          </div>
          <div class="topic centered">
            <language phrase="advertising" />
          </div>
        </div>
        <div class="line-2 centered">
          <div class="topic centered">
            <language phrase="web_design" />
          </div>
          <div class="topic centered">
            <language phrase="packaging" />
          </div>
        </div>
      </div>
    </div>
    <div class="teal-section">
      <div class="box centered"></div>
    </div>
    <div class="testimonials">
      <div class="testimonials-container centered">
        <div class="title uppercase">
          <language phrase="testimonial_header" />
        </div>
        <div class="copy padding">
          <language phrase="testimonial_1" />
        </div>
        <div class="outline contact uppercase centered">
          <language phrase="contact" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Language from "@/components/Language.vue";
import LanguageSwitch from "@/components/LanguageSwitch.vue";

export default {
  name: "App",
  components: { Language, LanguageSwitch },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sulphur+Point:wght@300;400;700&display=swap");

#app {
  font-family: Sulphur Point, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}

/* Utility classes */
.centered {
  margin: auto;
}
.padding {
  padding-left: 20px;
  padding-right: 20px;
}
.uppercase {
  text-transform: uppercase;
}
.outline {
  width: fit-content;
  border: 1px solid black;
  padding: 5px 10px !important;
}
.strong {
  font-weight: 700;
}

/*  Navbar */
.navbar {
  height: 60px;
  display: flex;
  background-color: lavender;
  align-items: center;
}
.design,
.about,
.contact,
.topic {
  font-size: 13px;
  padding: 10px 20px;
}
.m-logo {
  flex-grow: 1;
}
.m-logo > div {
  width: min-content;
  margin-left: 0px;
}
.teal-section {
  height: 250px;
}

/* First grey section */
.header {
  display: flex;
  flex-direction: column;
  background-color: gainsboro;
}
.topics .line-1,
.topics .line-2 {
  display: flex;
  width: min-content;
}
/* At normal widths, remove margins between two lines (which are actually on one line when width > 500px) */
.topics .line-1 {
  margin-right: 0px !important;
}
.topics .line-2 {
  margin-left: 0px !important;
}
.topics {
  display: flex;
  margin-bottom: 10px;
}
.topics .topic {
  width: fit-content;
  white-space: nowrap;
}
.topics .line-1 .topic:first-child {
  margin-left: 0px;
}
.message {
  font-size: 32px;
  margin-top: 40px;
  margin-bottom: 30px;
  flex-grow: 1;
  text-align: left;
}

/* Second teal section */
.teal-section {
  background-color: teal;
  display: flex;
  margin: auto;
  align-items: center;
}
.teal-section .box {
  background-color: lightcoral;
  width: 100px;
  height: 100px;
}

/* Last grey section */
.testimonials {
  background-color: lightgray;
  display: flex;
}
.testimonials .testimonials-container {
  background-color: lightgreen;
  width: 60%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
}
.testimonials .copy {
  margin-bottom: 30px;
  margin-top: 30px;
}

@media screen and (max-width: 500px) {
  .topics {
    flex-direction: column;
  }
  .topics .line-1,
  .topics .line-2 {
    margin: auto !important;
  }
  .topics .line-2 .topic:first-child {
    margin-left: 0px !important;
  }
  .topic,
  .navbar-item {
    padding: 5px 10px !important;
  }
  .testimonials-container {
    width: 100% !important;
  }
}
</style>
