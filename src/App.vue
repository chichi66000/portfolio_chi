<template>
  <div id="app">
    <Navbar/>
    <!-- <MenuAside/> -->
  <router-view ></router-view>

  <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar"
// import MenuAside from './components/MenuAside'
import Footer from './views/Footer'
export default {
  name: 'App',
  components: {
    Navbar,  Footer, 
    // MenuAside,
  },
}
</script>

<style lang="scss">
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
      font-size: 1rem;
    }
    .bg-rose {
        background: #ffd5e3; 
        width: 100%;
    }
    ul, li {
        list-style-type: none;
    }
    a {
        text-decoration: none !important;
        font-family: 'Indie Flower';
        // color: black;
    }
    a:hover, a:focus {
        text-decoration-color: #b500a4 !important;
        opacity: 0.8;
    }
    .img {
        object-fit: contain;
    }
    h3 {
        font-family: "Roboto";  
        font-size: 2.5rem;
        font-weight: 800;
    }
    h4 {
        font-family: 'Dancing Script', cursive;
        color: #b500a4;
        font-size: 2rem;
        font-weight: 700;
    }
    .btn-primary {
        color: black;
        background: linear-gradient(to right, #b500a4 50%, transparent 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all .5s ease-out;
        border: black 1px solid !important;  
    }
    .btn-primary:hover, .btn-primary:focus {
        color: black; 
        background-position: left bottom;
    }
    .name_projet {
        font-family: 'Dancing Script', cursive;
        color: #b500a4;
        font-weight: 500;
    }
    .gray {
        background: #f8f8f8;
    }
    .trait {
        width: 70%;
        background: linear-gradient(135deg, red, blue);
        height:0.3rem !important;
    }
    .lien {
        width: 10rem;
    }
</style>