<template>
    <div class="">
        <div class="bg-rose d-flex border-0 text-center contact">

            <h4 class=" ml-5 my-3 gauche">CONTACT</h4>
            <p class="pl-3 my-3 droite"> <strong>Khanh Chi LE</strong> <br>
            2 Rue du Rimbaud, <br>
            66100 PERPIGNAN<br>
            <strong>Tel</strong>: 06.32.82.63.51<br>
            <strong>Email</strong>: <a href="mailto: le.khanhchi@yahoo.fr"> le.khanhchi@yahoo.fr</a> <br>
            <strong>LinkedIn:</strong><a href="https://linkedin.com/in/khanhchi-le"> https://linkedin.com/in/khanhchi-le</a> <br>
            <strong>GitHub:</strong><a href="https://github.com/chichi66000"> https://github.com/chichi66000</a> 

            </p>

        </div>
        
    </div>
</template>
<script>
export default {
    name: "Contact", 
    
}
</script>

<style scoped>
    .contact {
        margin-left: auto;
        margin-right: auto;
        padding: 0.5rem;
    }
    .gauche {
        width: 35%
    }
    
    @media screen and (max-width: 575px) {
        .contact {
            flex-direction: column !important;
        }
    }
    
</style>