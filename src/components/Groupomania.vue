<template>
    <div class="">
        <!-- Présentation du projet Groupomania -->
        <div class="">

            <div class="bg-rose mx-auto">
                <div class="bloc1 d-flex ">
                    <div class="d-flex flex-column flex-md-row  p-2 ">
                        <div class="mx-auto p-1 col col-md-6 ">
                            <h4 class="">Groupomania, réseau social d'entreprise</h4>
                            <p class="text para">
                                Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues.
                            </p>
                        </div>

                        <div class="text-center d-flex flex-column flex-sm-row flex-wrap mx-auto  ">

                            <img class= "img img-fluid iphone2 p-2" src="../assets/image/projet7_4.png" alt="interface iphone profil user" style="width: 15rem; min-width: 10rem "/>

                            <img class="img img-fluid iphone1 p-2" src="../assets/image/projet7_1.png" alt="Groupomania, photo interface iphone" style="width: 15rem; min-width: 10rem "/>

                        </div>
                    </div>
                </div>

            </div>

            <div class="gray p-2 ">

                <div class="gray d-flex flex-column flex-md-row flex-wrap justify-content-between text-center">

                    <img class= "img img-fluid mx-auto mac" src="../assets/image/projet7_mac.png" alt="interface iphone profil user" style="width: 30rem; min-width: 10rem " />

                    <img class= "img img-fluid mx-auto" src="../assets/image/projet7_3.png" alt="interface iphone profil user" style="width: 12rem; min-width: 5rem " />
                    
                </div>

                <p class="text-center p-2 ">L'utilsateur a son espace profil pour pouvoir modifier son profil, son mot de passe, récupérer ses publications, les modifier ou supprimer. 
                    <br> Il peut aussi décider de supprimer son compte en confirmant son mot de passe.
                </p>
            </div>
            
            <div class="bg-rose d-flex p-2 flex-column flex-md-row justify-content-between ">

                <img class= "img img-fluid mx-auto p-2" src="../assets/image/projet7_admin.png"  alt="interface iphone profil user" />
                <p class="align-self-center ">Agent d'administrateur peut gérer tous les utilisateurs en attribuant le rôle "admin" pour 1 utilisateur ou lui supprimer au besoin. <br>

                Il peut aussi supprimer les publications avec contenu non-approprié </p>


            </div>
            <!-- <hr class="trait my-2 " /> -->
            <div class="gray text-center p-2">

                <h4 class="font-weight-bold">Technologies utilisé</h4>
                
                <p class="font-weight-bold">NodeJS, VueJS, HTML, CSS, JavaScript, Bootstrap, MySQL</p>
                
                <a class="btn btn-primary plus px-3 my-2" href="https://github.com/chichi66000/Le_KhanhChi_Groupomania" aria-label="button lien au page GitHub" aria-labelledby="link to Github " title="button pour aller sur la page Github">Sur Github...</a>

            </div>

        </div>

    </div>

</template>

<script>
export default {
    name: "Groupomania",
}
</script>

<style scoped>
    @media screen and (max-width: 384px) {
        .mac {
            display:none
        }
    }

</style>

