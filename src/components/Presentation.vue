<template>
    <div class="gray">
        <APropos/>
        <Projets/>
    </div>
</template>

<script>
import APropos from './APropos'
import Projets from './Projets'

export default {
    name: "Presentation",
    components: {
      APropos, Projets,
    }
}
</script>

   