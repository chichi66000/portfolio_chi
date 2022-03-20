<template>
<!-- presentation de calculatrice -->
    <div class="">
        <div class="d-flex bg-rose flex-column flex-md-row p-2">
            <div class="w-100 w-md-50">
                <h4 class="text-center">Calculatrice - Challenge avec Frontend-Mentor</h4>
                <p>Le but est de reproduire à l'identique la calculatrice à partir des marquettes.</p>
                <p>La calculatrice est en version simple avec des fonctionnalités de bases</p>

            </div>
            <div class="w-100 w-md-50" >
                
                <img class="img img-fluid " src="../assets/image/calculateur.png" alt="calculatrice theme 1">
            </div>
        </div>

        <div class="gray mx-auto d-flex flex-column flex-lg-row text-center p-2 ">
            <p class="align-self-center ">On peut changer le thème d'affichage avec un button</p>
           
            <div class="d-flex flex-column flex-md-row mx-auto text-center ">
                <img class="img img-fluid p-2 calcul" style="object-fit: cover;" src="../assets/image/calculatrice2.png" alt="calculatrice theme 2">
                <img class="img img-fluid p-2 calcul" style="object-fit: cover;" src="../assets/image/calculatrice3.png" alt="calculatrice theme 3">
                
            </div>
        </div>
        
        <!-- lien -->
        <div class="text-center gray">
            <h4 class="font-weight-bold py-2">Technologies utilisé</h4>
            <p class="font-weight-bold">HTML, CSS, Bootstrap, JavaScript</p>
            <a href="https://chichi66000.github.io/calculateur/" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page calculateur" aria-labelledby="link " title="button pour ouvrir la page calculateur">Voir mon site</a>
            <a href="https://github.com/chichi66000/calculateur" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page GitHub" aria-labelledby="link to Github " title="button pour aller sur la page Github">Sur Github...</a>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Calculateur"
}
</script>

<style scoped>
    @media screen and (min-width: 400px) and (max-width: 767px) {
        .calcul {
            width: 15rem
        }
    }
    
</style>

