<template>
  <div id="app">
    <header>
      <span>Logo</span>
      <div @click="menu" class="bx bx-menu" id="menu-icon"></div>
      <nav class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <a href="https://github.com/VacationForever/webexam2023" target="__blank">GitHub</a>
        <router-link :to="{path: 'cart'}">Cart: 0</router-link>
        <div @click="darkmode" class="bx bx-moon" id="darkmode"></div>
      </nav>
    </header>
    <section class="section">
      <router-view/>
    </section>
  </div>
</template>

<script>
  // let navbar = document.querySelector(".navbar");
  import {mapGetters} from 'vuex';

  export default {
    methods: {
      menu() {
        document.querySelector(".navbar").classList.toggle("active");
      },
      darkmode() {
        let dark = document.querySelector('#darkmode');
        if (dark.classList.contains("bx-moon")) {
          dark.classList.replace("bx-moon", "bx-sun");
          document.body.classList.add("active");
        } else {
          dark.classList.replace("bx-sun", "bx-moon");
          document.body.classList.remove("active");
        }
      },
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Nunito', sans-serif;
}

:root {
  --nav-active-color: #fe5d00;
  --black: #000;
  --bg-color: #fff;
  --text-color: #0b091c;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}

body.active {
  --text-color: #fff;
  --bg-color: #0b091c;
}

header {
  /* position: fixed; */
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-color);
  padding: 16px 10%;
  transition: 0.2s;
  }

.navbar {
  display: flex;
}

.navbar a {
  font-size: 1rem;
  color: var(--text-color);
  margin: 0 20px;
}

.navbar a.router-link-exact-active {
  color: var(--nav-active-color);
  border-bottom: solid 2px var(--nav-active-color);
}

#menu-icon {
  font-size: 24px;
  cursor: pointer;
  z-index: 10001;
  display: none;
 }

 #darkmode {
  font-size: 22px;
  cursor: pointer;
 }

.section {
  max-width: 1000px;
  margin: 0 auto;
 }

@media (max-width: 768px) {

  header {
    padding: 11px 4%;
  }

  #menu-icon {
    display: initial;
    color: var(--text-color);
  }

  header .navbar {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--bg-color);
    box-shadow: 0 4px 4px rgb(0 0 0 / 10%);
    transition: 0.2s ease;
    text-align: center;
  }

  .navbar.active {
    display: flex;
    top: 100%;
    top: 40px;
    left: 0;
    right: 0;
  }

  .navbar a {
    padding: 1.5rem;
    display: block;
    background: var(--bg-color);
  }

  #darkmode {
    position: absolute;
    top: 1.5rem;
    right: 1.8rem;
  }

  .scroll-down {
    display: none;
  }

  .about-container {
    grid-template-columns: 1fr;
  }

  .about-img {
    display: flex;
    justify-content: center;
  }

  .skills-container {
    grid-template-columns: 1fr;
  }

  .skills-img img {
    padding-left: 0;
  }

  .skills-img {
    padding-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .contact-form form {
    width: 300px;
  }

  .contact-button {
    margin-left: 25%;
  }
 }
</style>
