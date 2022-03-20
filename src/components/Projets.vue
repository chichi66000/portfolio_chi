<template>
    <div class="gray section3 " id="mesProjets">
        <!-- Projets réalisés -->
        <h3 class = "mx-5 my-3 font-weight-bold">Mes projets</h3>

        <div id="carouselExampleDark" class="carousel carousel-dark slide " data-bs-ride="carousel">

            <div class="carousel-inner w-75 mx-auto carouselDiv ">
                <!-- Groupomana -->
                <router-link to="/groupomania"  class="carousel-item active card p-2 " style="height: 98%">
                    <h5 class="card-title px-2">Groupomania, réseau social d'entreprise</h5>
                    
                    <div class="w-100 mx-auto text-center" style=" max-height: 20rem;max-width: 30rem">
                        <img src="../assets/image/projet7_iphone_3.png" class="card-img-top "  alt="projet Groupomania" style="height: fit-content"> 
                    </div>
                    <div class="card-body" >
                        <p class="card-text ">Ce projets est pour but d'améliorer l'ambiance entre les employés, échanger les publications, vidéos, photos, commentaires...</p>
                        <p class="card-text techno">NodeJS, VueJS, HTML, CSS, JavaScript, Bootstrap, MySQL</p>
                    </div>
                </router-link>
                
                <!-- Pekocko -->
                <router-link to="/pekocko" class="card carousel-item p-2" style="height: 98%" >
                    <h5 class="card-title px-2">So Pekocko - Application d'avis gastronomique</h5>
                    
                    <div class="w-100 mx-auto text-center" style=" max-height: 20rem;max-width: 30rem" > 
                        <img src="../assets/image/projet6_2.png" class="card-img-top " alt="Pekocko sauce piquante" style="height: fit-content">
                    </div>
                    <div class="card-body" style="">
                        <p class="card-text ">L’entreprise <strong> SO PEKOCKO </strong> souhaite développer une application d’évaluation de ses sauces piquantes, appelée “Piquante”.</p>
                        <p class="card-text techno ">NodeJS, Express, HTML, CSS, JavaScript, MongoDB, React</p>
                    </div>
                </router-link>

                <!-- Chat app React -->
                <router-link to="/react-app-chat" class="carousel-item card p-2" style="height: 98%">
                    <h5 class="card-title px-2">React CHAT application</h5>
                    
                    <div class="w-100 mx-auto text-center" style="max-width: 30rem; max-height: 20rem">
                        <img src="../assets/image/chat_login.png" class="img-fluid " alt="projet REACT CHAT APPLICATION" style="height: fit-content">
                    </div>
                    <div class="card-body" >
                        <p class="card-text ">Cette application fait avec React pour envoyer des messages, photos entre amis, groupes... </p>
                        <p class="card-text  techno">NodeJS, React, HTML, CSS, JavaScript, Tailwind, Firebase, React-Chat-Engine</p>
                    </div>
                </router-link>

                <!-- Orinoco -->
                <router-link to="/orinoco" class="card carousel-item p-2" style="height: 98%">
                    <h5 class="card-title px-2 ">Orinoco, site e-commerce</h5>
                    <div class="w-100 mx-auto text-center" style="max-width: 30rem; max-height: 20rem">
                        <img class= "img img-fluid " src="../assets/image/projet5_4.png" alt="photo site e-commerce Orinoco" style="height: fit-content" />
                    </div>
                    <div class="card-body">
                        <p class="card-text ">
                        Orinoco est une entreprise de commerce en ligne. Ce projet est pour but de créer un premier MVP pour démontrer le fonctionnement de ses applications à ses investisseurs.
                        </p>
                        <p class="card-text techno">HTML, CSS, JavaScript, Bootstrap</p>
                    </div>
                </router-link>

                <!-- Scraping film -->
                <router-link to="/calculateur" class="carousel-item card p-2" style="height: 98%" >
                    <h5 class="card-title px-2">Update Movies</h5>
                    <div class="w-100 w-md-75 w-lg-25 mx-auto" style="max-width: 30rem; max-height: 20rem">
                        <img class="img-fluid " src="../assets/image/films1_adobespark.png" alt="movie " style="height: fit-content"/>
                    </div>
                    <div class="card-body" >
                        <p class="card-text ">C'est un site web scraping pour les films, utiliser API et Puppeteer pour interagir avec le site IMDB movies. </p>
                        <p class="card-text  techno">HTML, CSS, Tailwind, JavaScript, NodeJS, VueJS</p>
                    </div>
                </router-link>

                <!-- Agence La Chouette -->
                <div  class="card carousel-item p-2" style="height: 98%" >
                    <h5 class="card-title px-2 ">Optimiser <strong>SEO</strong> du site web d'Agence La Chouette</h5>
                    <div class="w-100 mx-auto text-center" style="max-width: 30rem; max-height: 20rem">
                        <img class= "img img-fluid " src="../assets/image/projet4_01_adobespark.png" alt="photo site agence La Chouette" style="height: fit-content"/>
                    </div>
                    <div class="card-body">
                        <p class="card-text ">
                        Ce projet est pour but d'optimiser un site web du Agence La Chouette
                        </p>
                    </div>
                </div>
                
                <!-- Calculatrice -->
                <router-link to="/calculateur" class="carousel-item card p-2" style="height: 98%">
                    <h5 class="card-title px-2">Calculatrice simple</h5>
                    
                    <div class="w-100 mx-auto text-center" style="max-width: 30rem; max-height: 20rem">
                        <img class="cad-img-top img" src="../assets/image/calculateur.png" alt="calculateur 1" style="max-height:20rem; object-fit: contain"  />
                    </div>
                    <div class="card-body" >
                        <p class="card-text ">Ce projet consiste à reproduire à l'identique le design d'un calculatrice un challenge inspirant du site Frontend Mentor avec des fonctionnalités simples. </p>
                        <p class="card-text  techno">HTML, CSS, Bootstrap, JavaScript</p>
                    </div>
                </router-link>

                <!-- Crowfund -->
                <router-link to="/crowdfund" class="carousel-item card p-2" style="height: 98%" >
                    <h5 class="card-title px-2">Crowdfund</h5>
                    
                    <div class="w-100 mx-auto text-center" style="max-width: 30rem; max-height: 20rem">
                        <img src="../assets/image/crowdfunding.png" alt="crowdfund 1" class="card-img-top " style="max-height: 20rem; object-fit: contain" />
                    </div>
                    <div class="card-body" >
                        <p class="card-text ">Ce projet consiste à reproduire à l'identique le design d'une marquette, un challenge inspirant du site Frontend Mentor. </p>
                        <p class="card-text techno ">HTML, CSS, Tailwind, JavaScript</p>
                    </div>
                </router-link>

                <!-- Frontend -->
                <router-link to="/frontend" class="card carousel-item p-2" style="height: 98%">
                    <h5 class="card-title px-2 ">Transformer des marquettes en site web.</h5>
                    <div class="w-100 mx-auto text-center" style="max-width: 30rem; max-height: 20rem">
                        <img class= "img img-fluid " src="../assets/image/projet2_mac.png" alt="photo site agence Reservit" style="height: fit-content"/>

                    </div>
                    <div class="card-body">
                        <p class="card-text techno">HTML, CSS</p>
                    </div>
                </router-link>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: "Projet",
    methods: {
        // scrollTop () {
        //     window.scroll({top: 0, behavior: "smooth"})
        //     alert("message")
        // }
    }
}
</script>

<style scope>
    a:hover, a:focus {
        color: black;
        opacity: 1.5;
    }
    h5 {
        color: #9A0680;
        font-weight: bold;
    }
   .techno {
       color: #FFCC1D
   }
    .carouselDiv {
        height: 40rem;
        padding: 0.5rem;
    }
    
    @media screen and (max-width: 370px) {
        
        .size-xs {
            display: none
        }
        .carouselDiv {
            height: 45rem;
        }
    }
  
</style>