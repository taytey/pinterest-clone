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
                    name: 'test',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
                    alt: 'Image 2',
                    loaded: false,
                    name: 'test2',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
                    alt: 'Image 3',
                    loaded: false,
                    name: 'test3',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
                    alt: 'Image 4',
                    loaded: false,
                    name: 'test4',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
                    alt: 'Image 5',
                    loaded: false,
                    name: 'test5',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
                    alt: 'Image 6',
                    loaded: false,
                    name: 'test6',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
                    alt: 'Image 7',
                    loaded: false,
                    name: 'test7',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
                    alt: 'Image 8',
                    loaded: false,
                    name: 'test8',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
                    alt: 'Image 9',
                    loaded: false,
                    name: 'test9',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
                    alt: 'Image 10',
                    loaded: false,
                    name: 'test10',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
                    alt: 'Image 11',
                    loaded: false,
                    name: 'test11',
                },
                {
                    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
                    alt: 'Image 12',
                    loaded: false,
                    name: 'test12',
                },
            ])
        };
    },

    methods: {
        enlargeImage() {
					this.scale = 1.5;
		},
    }
    
}
</script>

<template>
    <div class="z-5 m-10">
        <h1 class="text-gray-200 font-sans md:font-mono text-center text-4xl mb-5">Welcome to your feed.</h1>
            <masonry :cols="4" :gutter="10">
                <div v-for="(image, index) in images" :key="image">
                    <button @click="showComponent = true">
                        <img class="hover:scale-110 transition ease-in-out delay-10 h-auto max-w-full rounded-lg mt-2" :src="image.src">
                        <v-overlay transition="slide-x-transition" class="rounded-lg" activator="parent">
                            <div v-if="showComponent" class="d-flex flex-row h-screen w-screen">
                                <div class="m-auto">
                                    <v-card height="500" width="1100" variant="tonal" class="bg-black mx-auto rounded-xl static">
                                        <div class="relative w-900">
                                            <div class="absolute right-0 w-18 text-3xl">
                                                <v-btn variant="text" @click="showComponent = false">X</v-btn>
                                            </div>
                                        </div>
                                        <v-img :object-fit="'contain'" :aspect-ratio="1/1" class="fixed transition rounded-lg hover:scale-125 " :max-width="500" cover :src="image.src" :alt="image.alt"></v-img>
                                    </v-card>
                                </div>
                            </div>
                        </v-overlay>
                    </button>
                </div>
            </masonry>
        </div>

    
</template>

<style>

</style>