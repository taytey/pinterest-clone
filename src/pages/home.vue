<script>
    import hero from '../components/hero.vue';
    import navbar from '../components/navbar.vue';

    export default {
    name: 'home',
    components: { navbar }
};
</script>

<template>
    <navbar />
    <h1>This is home</h1>
    <hero/>

</template>

