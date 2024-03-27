<template>

    <TransCard v-if="type == 'translate'"/>
    <BlankCard  v-if="type == 'blank'"/>
    <PuzzleCard  v-if="type == 'puzzle'"/>
    <AudioCard  v-if="type == 'audio'"/>
    <AudioPuzzleCard  v-if="type == 'timer'"/>

</template>

<script>

    import TransCard from './TransCard.vue'
    import BlankCard from './BlankCard.vue'
    import PuzzleCard from './PuzzleCard.vue'
    import AudioCard from './AudioCard.vue'
    import AudioPuzzleCard from './AudioPuzzleCard.vue'


    export default {
        name: 'Temp Card',
        components: {AudioPuzzleCard, AudioCard, BlankCard, TransCard, PuzzleCard},
        props: ['type']
    }

</script>

<style lang="scss">

    @import '../stylesheets/styles_lessons.css';



</style>