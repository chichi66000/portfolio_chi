<template>
    <div class="gray " id="aPropos">
        <!-- A propos, présentation -->

        <h3 class=" text-center py-3 ">A propos <br> 
            <p class= "decor " >///</p>
        </h3>

        <div class=" b1">

            <div class="avatar d-flex text-center my-5">
                
                <img class= "img img-fluid  photo_moi " src="../assets/image/photo_adobespark.jpeg" alt ="photo de Khanh Chi LE"/>
                
                <p class="moi1 font-weight-bold fs-4 p-2">
                    Je suis <strong>Khanh Chi LE</strong> - développeuse web <strong>Full Stack Junior</strong> . 
                </p>

            </div>

            <hr class="petit-trait">
            <p class="moi2 p-2">
                <strong>Mon job est donc de créer des produits pour le web : cela peut aller d’une simple page vitrine à une application web.</strong> <br>
                Je suis impliqué de la conception à la finalisation du produit, en mettant en place des outils nécessaires et adaptés, et m’assure ensuite du bon fonctionnement du tout ce qui a été réalisé.
            </p>

        </div>

        <hr class = "trait ">

        <!-- Technique utilisé -->
        <div class = "my-3 mx-auto text-center">

            <h3 class="text-center p-3">Technologies utilisées</h3>
            <img class ="img img-fluid icon" src ="../assets/image/nodejs1_adobespark.png" alt = "icon NodeJs"/> 
            <img class ="img img-fluid icon" src ="../assets/image/MySQL-Logo1_adobespark.png" alt = "icon MySql"/> 
            <img class ="img img-fluid icon" src ="../assets/image/mongodb_adobespark.jpeg" alt = "icon MongoDB"/> 
            <img class ="img img-fluid icon" src ="../assets/image/vuejs1_adobespark.png" alt = "icon VueJs"/>
            <img class ="img img-fluid icon" src ="../assets/image/react.png" alt = "icon React"/>
            <img class ="img img-fluid icon1" src ="../assets/image/seo1_adobespark.png" alt = "icon Seo"/> 
            <img class ="img img-fluid icon2" src ="../assets/image/html51_adobespark.png" alt = "icon Html5"/>
            <img class ="img img-fluid icon2" src ="../assets/image/css1_adobespark.png" alt = "icon css"/> 
            <img class ="img img-fluid icon2" src ="../assets/image/js_adobespark.png" alt = "icon js"/> 
            <img class ="img img-fluid icon1" src ="../assets/image/bootstrap1_adobespark.png" alt = "icon Bootstrap"/> 
            <img class ="img img-fluid icon1" src ="../assets/image/tailwindcss_adobespark.png" alt = "icon Tailwind"/> 
        </div>

        <hr class="trait">
    </div>
</template>

<script>
export default {
    name: "APropos",
}
</script>

<style scoped>

.icon {
    width: 10rem;
    padding: 0.5rem;
}
.icon1 {
    width: 8rem;
    padding: 0.5rem;
}
.icon2 {
    width: 6rem;
    padding: 0.5rem;
}
/* .b1 {
    padding: 1rem;
} */
.avatar {
    flex-direction: column;
}
.petit-trait {
    width: 20%;
    background: linear-gradient(135deg, red, blue);
    height:0.3rem !important;
}
.moi1 {
    font-weight: 900;
    font-family: Arial;
    /* margin-top: -5rem; */
}

@media screen  and (max-width:479px ) {
    .avatar {
        flex-direction: column;
    }
}

@media screen  and (min-width:480px ) and (max-width: 499px) {
    .avatar {
        flex-direction: row;
    }
    .photo_moi {
        width: 70%
    }
    .moi1{
        width: 50%;
        /* margin-left: -2rem; */
        align-self: end;
    }
}

@media screen and (min-width: 500px) and (max-width: 767px) {
    .avatar {
        flex-direction: row;
    }
    .photo_moi {
        width: 50%;      
    }
    .moi1 {
        width: 40%;
        margin-left: -2rem;
        align-self: end;
    }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
    .avatar {
        flex-direction: row;
    }
    .photo_moi {
        width: 40%;
        margin-left: 3rem;
    }
    .moi1 {
        width: 30%;
        padding: 2rem;
        align-self: center;
    }
    .moi2 {
        margin-left: 2rem;
    }
}

@media screen and (min-width: 992px) {
    .avatar {
        flex-direction: row;
    }
    .photo_moi {
        width: 35%;
        margin-left: 3rem;
    }
    .moi1 {
        width: 30%;
        padding: 2rem;
        align-self: center;
    }
    .moi2 {
    margin-left: 3rem;
    }
}

</style>

