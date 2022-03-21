<template>

    <div >

        <!-- Button menu -->
        <nav class="navbar navbar-expand-md navbar-light p-2" style="background: #F0ECE3">
            <div class="container-fluid">
                <button class="navbar-toggler bg-white  " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav justify-content-between mx-auto w-100 ">
                        <li class="nav-item p-2">
                            <router-link to="/" class=" ">Home</router-link>
                        </li>
                        <!-- Projets -->
                        <li class="nav-item dropdown ps-2 ">
                            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Projets full-stack
                            </a>
                            <ul class="dropdown-menu "  aria-labelledby="navbarDropdown">
                                <li class="px-1 py-1 " >
                                    <router-link to="/taxi" class="link" >IMPEC, platform de gestion taxi</router-link>
                                </li>
                                <li class="px-1 py-1 " >
                                    <router-link to="/groupomania" class="link" > Réseau social entreprise Groupomania</router-link>
                                </li>
                                <li class="px-1 py-1 ">
                                    <router-link to="/pekocko" class="link" >Pekocko, application gastronomique</router-link>
                                </li>
                                <li class="px-1 py-1 ">
                                    <router-link to= "/react-app-chat" class="link" > React CHAT application </router-link>
                                </li>
                                <li class="px-1 py-1 ">
                                    <router-link to= "/movies" class="link" >Movies Coming Soon</router-link>
                                </li>
                                
                            </ul>
                        </li>

                        <!-- Marquettes frontend -->
                        <li class="nav-item dropdown ps-2 ">
                            <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Marquettes
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">

                                <li class="px-1 py-1 ">
                                    <router-link to= "/orinoco" class="link" > Orinoco, site de commerce </router-link>
                                </li>
                                <li  class="px-1 py-1 " >
                                    <router-link to= "#" class="link">SEO, agence La Chouette</router-link>
                                </li>
                                <li class="px-1 py-1 ">
                                    <router-link to= "/frontend" class="link" > OhMyFood, application réservation restaurant </router-link>
                                </li>
                                <li>
                                    <router-link to= "/crowdfund" class="link" > Crowdfund</router-link>
                                </li>
                                <li class="px-1 py-1 ">
                                    <router-link to="/calculateur" class="link"  > Calculatrice simple</router-link>
                                </li>
                            </ul>
                        </li>

                        <!-- Contact -->
                        <li class="nav-item p-2 ">
                            <router-link class="" to="/contact">Contact</router-link>
                        </li>
                        
                        <!-- Mail -->
                        <li>
                            <a class="btn accueil" href="mailto:le.khanhchi@yahoo.fr" role="button" aria-label="mail" aria-labelledby="mail to " title="envoyer un mail to Khanh Chi LE"><i class="far fa-envelope px-1 mx-1"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style>
    .fa-envelope {
        font-size: 2rem;
        font-weight: 900
    }
    .dropdown-menu {
        min-width: 15rem;
    }
    .link {
        color: #781D42;
    }
    a {
        color: black;
        font-weight: bold
    }

    li:hover, li:focus {
        opacity: 0.8;
        background: white;
        border-radius: 0.5rem;
    }

</style>