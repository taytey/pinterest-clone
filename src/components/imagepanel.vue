<script>
import { ref } from 'vue';

    export default {
    name: "Imagepanel",
    data() {
        return {

            showComponent: false,

            images: ref([
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
                    alt: 'Image 1',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
                    alt: 'Image 2',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
                    alt: 'Image 3',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
                    alt: 'Image 4',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
                    alt: 'Image 5',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
                    alt: 'Image 6',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
                    alt: 'Image 7',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
                    alt: 'Image 8',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
                    alt: 'Image 9',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
                    alt: 'Image 10',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
                    alt: 'Image 11',
                    loaded: false,
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
                    alt: 'Image 12',
                    loaded: false,
                },
            ])
        };
    },
    
}
</script>

<template>
    <div v-if="showComponent" id="card" class="z-50 box-border h-3000 w-200 p-4 border-4 bg-gray-300">
        <h1>Test</h1>
        <button @click="showComponent = false">
            <h1>Close</h1>
        </button>
    </div>
    <div class="z-5 m-10">
        <h1 class="text-gray-200 font-sans md:font-mono text-center text-4xl mb-5">Welcome to your feed.</h1>
            <masonry :cols="4" :gutter="10">
                <div v-for="(image, index) in images" :key="image">
                    <button @click="showComponent = true">
                        <img class="transition ease-in-out delay-150 hover:opacity-10 h-auto max-w-full rounded-lg mt-2" :src="image.src">
                        <v-overlay activator="parent">
                            <v-img :src="image.src" :alt="image.alt" width="100%"></v-img>
                        </v-overlay>
                    </button>
                </div>
            </masonry>
        </div>

    
</template>

<style>

</style>