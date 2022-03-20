<template>
    <div class="">
        <div class="bg-rose p-2">
            <div class="text-center p-2">
                <h4 class="">Movies-Coming-soon</h4>
                <p class="">C'est un site web scraping pour les films, utiliser API et Puppeteer pour interagir avec le site IMDB movies. Vous pouvez récupérer une liste des films (posters, titres, acteurs...) pour une date choisie.</p>

            </div>
            <div class="text-center " >
                <img class="img img-fluid p-2" src="../assets/image/film.png" alt="films 1">
            </div>
                
        </div>

        <!-- lien -->
        <div class="text-center gray">
            <h4 class="font-weight-bold py-2">Technologies utilisé</h4>
            <p class="font-weight-bold">HTML, CSS, Tailwind, JavaScript, VueJS, NodeJS</p>
            <a href="https://films-coming-soon.herokuapp.com/" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page Movies" aria-labelledby="link to Movies" title="button pour ouvrir la page Movies" >Voir mon site</a>
            <a href="https://github.com/chichi66000/scrapingFilm" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page GitHub" aria-labelledby="link to Github " title="button pour aller sur la page Github">Sur Github...</a>
            
        </div>

    </div>
</template>

<script>
export default {
    name: "Movies"
}
</script>