<template>
    <div class=" mx-1 my-auto  aside">
        <button class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvas" role="button" aria-controls="offcanvas" aria-label="icon menu" aria-labelledby="offcanvas" title="button pour ouvrir le menu">
                <i class="fas fa-bars"></i>
        </button>

        <nav class="offcanvas offcanvas-start" data-bs-scroll="true"  tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            <ul class="">
                <li> <router-link to="/" class="link" data-bs-dismiss = "offcanvas" aria-label="Close">A propos</router-link></li>
                <li>
                    <p class="link"> Mes projets de la formations</p>
                    <ul>
                        <li>
                            <router-link to="/groupomania"  class="proj" data-bs-dismiss="offcanvas" aria-label="Close"><span class="rotate">///</span> Réseau social entreprise Groupomania</router-link>
                        </li>
                        <li>
                            <router-link to="/pekocko" class="proj" data-bs-dismiss = "offcanvas" aria-label="Close"> <span class="rotate">///</span> Pekocko, application gastronomique</router-link>
                        </li>
                        <li>
                            <router-link to= "/orinoco" class="proj" data-bs-dismiss = "offcanvas" aria-label="Close"> <span class="rotate">///</span> Orinoco, site de commerce </router-link>
                        </li>
                        <li>
                            <router-link to= "/" class="proj" data-bs-dismiss = "offcanvas" aria-label="Close"> <span class="rotate">///</span> SEO, agence La Chouette</router-link>
                        </li>
                        <li>
                            <router-link to="/frontend" class="proj" data-bs-dismiss = "offcanvas" aria-label="Close"> <span class="rotate">///</span> OhMyFood, application réservation restaurant</router-link>
                        </li>
                        <li>
                            <router-link to= "/frontend" class="proj" data-bs-dismiss = "offcanvas" aria-label="Close"> <span class="rotate">///</span> Reservit, template agence de voyage</router-link>
                        </li>
                    </ul>
                </li>
                <li >
                    <p class="link">Projets personnels</p>
                    <ul>
                        <li>
                            <router-link to="/calculateur" class="proj" data-bs-dismiss = "offcanvas" aria-label="Close"><span class="rotate">///</span> Calculatrice simple</router-link>
                        </li>
                        <li>
                            <router-link to="/crowdfund" class="proj" data-bs-dismiss = "offcanvas" aria-label="Close"><span class="rotate">///</span> Crowdfund</router-link>
                        </li>
                        <li>
                            <router-link to="/movies" class="proj" data-bs-dismiss = "offcanvas" aria-label="Close"><span class="rotate">///</span> Movies Coming Soon</router-link>
                        </li>
                    </ul>

                </li>
                <li> 
                    <router-link class="link" to="/contact" data-bs-dismiss = "offcanvas" aria-label="Close">Contact</router-link>
                </li>
            </ul>
                    
        </nav>
    </div>
</template>

<script>
export default {
    name: "MenuAside",
}
</script>

<style scoped>
    .aside {
        position: fixed
    }
    .proj{
        font-size: 1rem;
        color: black;
    }
    .proj:hover, .proj:focus {
        color: blue;
        opacity: 0.8;
    }
    .link {
        color: #C200B0;
        font-weight:700;
        font-size: 1.5rem;
        font-family: 'Raleway';
        text-decoration: none;
        background: linear-gradient(to top, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.5) 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
        transition: background-size .5s;
    }
    .link:hover, .link:focus {
        background-size: 100% 100%;
    }
    
    @media screen and (max-width: 767px) {
        .aside {
            position:static
        }
        .proj {
            font-size: 1rem;
        }
    }
   
</style>