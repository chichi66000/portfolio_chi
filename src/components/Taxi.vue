<template>
  <div>
    <div class="">
        <div class="d-flex bg-rose flex-column flex-md-row p-2">
            <div class="w-100 w-md-50">
                <h4 class="text-center py-md-5">IMPEC, platform de gestion taxi</h4>
                <p>Ce platform de gestion de taxi est réservé pour les sociétés de transport, les hôpitaux, les hôtels afin créer/ gérer les courses, les chauffeurs, les clients... </p>

            </div>
            <div class="w-100 w-md-50" >
                <img class="img img-fluid " src="../assets/image/impec_assistance_list.png" alt="impec assistance">
                <p>Le site est affiché selon le profil du user. Chaque profil a accès à ses propres fonctionnalités. Les hôpitaux et les hôtels peuvent seulement réserver les courses de taxi, les modifier et suivre état de leurs course (an attente, accepté ou terminé)</p>
            </div>
        </div>

        <!-- liste course -->
        <div class="d-flex flex-column flex-md-row row my-5">
          <div class="d-flex flex-column card mx-auto col" style="height: 30rem;">
            <img class="img img-fluid p-2 w-100 w-md-50 card-img h-75"  src="../assets/image/impec_liste_course.png" alt="impec_liste_course">
            <div style="background: #1fb29c; height: 7rem">
              <p class="px-2 card-text " style="color: black; ">Les sociétés de transport peuvent reçoivent les courses proposées par tous les agents (hôtels, hôpitaux, chauffeurs...). Puis ils peuvent distribuer ces courses à ses chauffeurs selon le planning.</p>
            </div>
          </div>

          <div class="d-flex flex-column card mx-auto col" style="height: 30rem">
            <img class="img img-fluid p-2 w-100 w-md-50 card-img h-75"  src="../assets/image/impec_list.png" alt="impec_list">
            <div style="background: #1fb29c; height: 7rem">
              <p class="px-2 card-text " style="color: black;" >Les courses sont affichés selon ses status (en attente, accepté, terminé) et la date choisi (par défaut c'est la date du jour).</p>
            </div>
          </div>
        </div>

        <!-- add course + client -->
        <div class="d-flex flex-column flex-md-row row">
          <div class="d-flex flex-column card mx-auto col bg-rose" style="height: 30rem">
            <img class="img img-fluid p-2 w-100 card-img h-75"  src="../assets/image/impec_add_course.png" alt="impec_add_course">
            <div style="background: #1fb29c; height: 7rem">
              <p class="px-2 card-text " style="color: black; ">Pour créer une course, on peut utiliser le menu en haut/ ou en cliquant sur le calendrier des chauffeurs afin de distribuer la course directement à un chauffeur.</p>
            </div>
          </div>

          <div class="d-flex flex-column card mx-auto col bg-rose" style="height: 30rem">
            <img class="img img-fluid p-2 w-100 card-img h-75"  src="../assets/image/impec_client.png" alt="impec_client">
            <div style="background: #1fb29c; height: 7rem">
              <p class="px-2 card-text " style="color: black;" >La gestion des clients/ chauffeurs se passent par l'onglet Client/ Chauffeurs. Ici, les gestionnaires peuvent récupérer, créer, modifier, supprimer leurs clients/ chauffeurs.</p>
            </div>
          </div>
        </div>


         <!-- lien -->
        <div class="text-center gray">
            <h4 class="font-weight-bold py-2">Technologies utilisé</h4>
            <p class="font-weight-bold">NodeJS, VueJS, HTML, CSS, JavaScript, Bootstrap, MySQL</p>
            <p>Le site est commercialisé par la sociéte taxi IMPEC.</p>
            <p>Website: https://manager.im-pec.fr/login</p>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Taxi'
}
</script>
