<template>
    <!-- projets personnels -->
  <div class=" " id="mesProjetsPersonnel">
    <h3 class = "p-2 mx-auto my-3 font-weight-bold">Projets personnels</h3>

    <!-- calculatrice -->
    <div >
      <div class="d-flex flex-column flex-md-row bg-rose p-2">
        <div>
          <h4 class = "my-3 text-center titre">Calculatrice simple</h4>
          <p>
            Ce projet consiste à reproduire à l'identique le design d'un calculatrice un challenge inspirant du site Frontend Mentor. 
          </p>
          <p>
            J'ai ajouté ensuite les fonctionnalités simples (les opérations + - * /) et un button pour changer les couleurs de la calculatrice .  
          </p>
        </div>

        <div>
          <img class="img img-fluid" src="../assets/image/calculateur.png" alt="calculateur 1"/>
        </div>

      </div>
      <!-- lien -->
      <div class="text-center gray">
        <h4 class="font-weight-bold py-2">Technologies utilisé</h4>
        <p class="font-weight-bold">HTML, CSS, Bootstrap, JavaScript</p>
        <router-link to="/calculateur" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page Calculatrice" aria-labelledby="link to Calculatrice" title="button pour ouvrir la page Calculatrice">Plus détails</router-link>
        <a href="https://github.com/chichi66000/calculateur" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page GitHub" aria-labelledby="link to Github " title="button pour aller sur la page Github">Sur Github...</a>
      </div>

    </div>
    
    <hr class="trait">

    <!-- crowdfund -->
    <div >
      <div class="d-flex flex-column flex-md-row bg-rose p-2">
        <div>
          <h4 class = "my-3 text-center titre">Crowdfund</h4>
          <p>
            Ce projet consiste à reproduire à l'identique le design d'un site recherche de financement, un challenge inspirant du site Frontend Mentor. 
          </p>
          <p>
            L'utilisateur peut choisir le formule de financement, remplir ses coordonnées et recevoir un email de remerciement.  
          </p>
        </div>

        <div>
          <img class="img img-fluid" src="../assets/image/crowdfunding1_adobespark.jpeg" alt="crowdfund 1"/>
        </div>

      </div>
      <!-- lien -->
      <div class="text-center gray">
        <h4 class="font-weight-bold py-2">Technologies utilisé</h4>
        <p class="font-weight-bold">HTML, CSS, Tailwind, JavaScript</p>
        <router-link to="/crowdfund" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page Crowdfund" aria-labelledby="link to Crowdfund" title="button pour ouvrir la page Crowdfund">Plus détails</router-link>
        <a href="https://github.com/chichi66000/crowdfund" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page GitHub" aria-labelledby="link to Github " title="button pour aller sur la page Github">Sur Github...</a>
      </div>

    </div>

    <hr class="trait">

    <!-- movies -->
    <div >
      <div class="d-flex flex-column flex-md-row bg-rose p-2">
        <div>
          <h4 class = "my-3 text-center titre">Update Movies</h4>
          <p>
            C'est un site web scraping pour les films, utiliser API et Puppeteer pour interagir avec le site IMDB movies.. 
          </p>
        </div>

        <div>
          <img class="img img-fluid" src="../assets/image/films1_adobespark.png" alt="movies 1"/>
        </div>

      </div>
      <!-- lien -->
      <div class="text-center gray">
        <h4 class="font-weight-bold py-2">Technologies utilisé</h4>
        <p class="font-weight-bold">HTML, CSS, Tailwind, JavaScript, NodeJS, VueJS</p>
        <router-link to="/movies" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page Calculatrice" aria-labelledby="link to Calculatrice" title="button pour ouvrir la page Calculatrice">Plus détails</router-link>
        
        <a href="https://github.com/chichi66000/scrapingFilm" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page GitHub" aria-labelledby="link to Github " title="button pour aller sur la page Github">Sur Github...</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ProjetsPersonnel"
}
</script>

<style scoped>
.lien {
        width: 10rem;
    }
</style>