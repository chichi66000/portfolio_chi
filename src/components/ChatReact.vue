<template>
    <div class="">

        <div class="d-flex bg-rose flex-column flex-md-row p-2 md-justify-content-between mx-auto">
            <!-- Présentation -->    
            <div class=" align-self-center">
                <h4 class="">React Chat >Application</h4>
                <p class="">Cette application fait avec React pour envoyer des messages, photos entre amis, groupes...</p>
            </div>
            
            <div class="">
                <img class="img img-fluid " src="../assets/image/chat_home.png" alt="chat application react home message"  />
            </div>
        </div>
       
        <!-- Les images -->
        <div class="gray d-flex flex-column flex-md-row p-2 md-justify-content-between mx-auto my-2 p-2" >
            <div class="card w-100 w-md-50 me-md-2 mb-3 rounded-3 rounded">
                <img class="img img-fluid p-2 w-100 w-md-50 card-img-top " src="../assets/image/chat_login.png" alt="chat app login " style="height: 15rem;">
                <div class="card-body rounded-3 rounded" style="background: #498da9">
                    <p class="p-1 card-text  p-2 text-white fs-5" >Espace pour inscriptions et connexion / déconnexion sécurisé avec Firebase et React-ChatEngine </p>

                </div>
            </div>

            <div class="card w-100 w-md-50 ms-md-2 mb-3 rounded-3 rounded">
                <img class="img img-fluid p-2 w-100 w-md-50 card-img-top " src="../assets/image/chat_delete_user.png" alt="chat app login " style="height: 15rem;">

                <div class="card-body rounded-3 rounded" style="background: #498da9">
                    <p class="p-1 card-text p-2 text-white fs-5" >Espace pour supprimer votre user définitivement</p>
                </div>                
            </div>
        </div>

        <!-- Image chat room chat setting -->
        <div class="bg-rose d-flex flex-column mx-auto px-1 ">
            <div class="d-flex flex-column flex-sm-row">
                <img class="img img-fluid p-2 w-100 w-md-50 " src="../assets/image/chat_room.png" alt="chat app gérer chat room " style="height: 17rem;">
                <img class="img img-fluid p-2 w-100 w-md-50 " src="../assets/image/chat_setting.png" alt="chat app gérer chat room setting" style="height: 17rem;">
            </div>
            <p class="p-1 text-center">Espace pour créer, supprimer, ajouter les amis, gérer les membres de votre chat room... </p>
        </div>

        <!-- Image pour update profile -->
        <div class="gray d-flex flex-column mx-auto px-1 py-3 rounded-3 rounded">
            <div class="d-flex flex-column flex-sm-row">
                <img class=" p-2 w-100 w-md-50 " src="../assets/image/chat_profile.png" alt="chat app gérer chat room profile" >
                <img class="p-2 w-100 w-md-50 " src="../assets/image/chat_update.png" alt="chat app gérer chat room update profile" >
            </div>
            <p class="p-1 text-center">Espace pour vérifier et update votre profile </p>
        </div>

        <!-- Lien -->
        <div class="text-center bg-rose">
            <h4 class="font-weight-bold py-2">Technologies utilisé</h4>
            <p class="font-weight-bold">HTML, CSS, JavaScript, Tailwind, React, NodeJS, Firebase, React-Chat-Engine</p>
            <a href="https://anewchatapp.herokuapp.com" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page calculateur" aria-labelledby="link " title="button pour ouvrir la page Chat Application">Voir mon site</a>
            <a href="https://github.com/chichi66000/ReactChatEngine" class="btn btn-primary plus px-3 my-2 mx-2 lien" aria-label="button lien au page GitHub" aria-labelledby="link to Github " title="button pour aller sur la page Github">Sur Github...</a>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChatReact',
}
</script>

<style scoped>

</style>