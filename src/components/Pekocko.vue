<template>
    <div>

        <!-- Présentation du projet Groupomania -->
        <div class="">

                <!-- section 1 titre + presentation -->
            <div class=" bg-rose ">
                <div class="d-flex flex-column flex-md-row p-2  ">

                    <div class="d-flex flex-column col col-md-6 p-2 mx-auto ">
                        <h4 class="">So_Pekocko, application d'avis gastronomique</h4>
                        <p class="align-self-center ">
                        L’entreprise <span class="name_projet">So_Pekocko</span> souhaite développer une application d’évaluation de ses sauces piquantes, appelée “Piquante”. Le projet est une application web permettant aux utilisateurs d’ajouter leurs sauces préférées et de liker ou disliker les sauces ajoutées par les autres utilisateurs.
                        </p>
                    </div>
                    <img class= "img img-fluid col col-md-6 p-2 mx-auto" src="../assets/image/projet6_2.png" alt="interface mac Pekocko" />
                </div>

            </div>

            <!-- section 2 -->
            <div class="gray p-2">
                <div class="gray bloc_photo3 d-flex flex-column flex-md-row p-2">

                    <img class= "img img-fluid ordi2 col col-md-6 p-2" src="../assets/image/projet6_1.png" alt="interface mac Pekocko" />

                    <img class= "img img-fluid ordi3 col col-md-6 p-2" src="../assets/image/projet6_3.png" alt="interface mac Pekocko" />
                   
                </div>

                <p class="mx-auto text-center ">L'utilsateur peut créer, modifier, supprimer ses sauces. Il peut aussi "like" ou "dislike" les produits des autres utilisateurs
                </p>
            </div>

            <!-- section 3 -->
            <div class="bg-rose d-flex flex-column flex-sm-row p-2 ">

                <p class="align-self-center col md:col-6">
                    Mon rôle: construire le site en entier (partie frontend ave React, partie backend avec NodeJS, MongoDB et Cloudinary). Le site a été déployé sur Heroku.
                </p>

                <img class= "img img-fluid col col-sm-8 col-md-6 col-lg-4 p-2 " src="../assets/image/projet6_4.png" alt="interface mac Pekocko" />

            </div>

            <div class="gray text-center p-2">

                <h4 class="font-weight-bold">Technologies utilisé</h4>
                
                <p class="font-weight-bold">NodeJS, JavaScript, MongoDB</p>

                <a class="btn btn-primary plus px-3 my-2 mx-2 lien" href="https://deploycreateursauce-production.up.railway.app" aria-label="button lien au site Pekocko" aria-labelledby="link to Pekocko" title="button pour ouvrir la page Pekocko" >Voir mon site</a>
                <a class="btn btn-primary plus px-3 my-2 mx-2 lien" href="https://github.com/chichi66000/createurSauce" aria-label="button lien au page GitHub" aria-labelledby="link to Github " title="button pour aller sur la page Github">Sur Github...</a>

            </div>

        </div>

    </div>
</template>

<script>

export default {
    name: "Pekocko",
}
</script>

