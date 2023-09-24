<script>
import { ref } from 'vue';
import ImageCard from './imagecard.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';


    export default {
    name: "Imagepanel",
    
    data() {
        return {

            showComponent: false,


            image: ref([
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
                    name: 'Shoe',
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

        receiveEmit() {
            this.showComponent = false;
        },

        selectImage(index, name, src) {
            this.index = index;     
            this.image.name = name;  
            this.image.src = src;
        },
    },

    emits: ['close-imagecard, receiveEmit'],

    components: {
        ImageCard,
    },
    
}
</script>

<template>

            <ImageCard v-if="showComponent" :index="index" :name="image.name" :src="image.src" @close-imagecard="receiveEmit">
                <Transition></Transition>
            </ImageCard>    
    <div class="absolute z-0">
        <div class="m-10">
        <h1 class="text-gray-200 font-sans md:font-mono text-center text-4xl mb-5">Welcome to your feed.</h1>
            <masonry :cols="4" :gutter="10">
                <div v-for="(image, index) in image" :key="image">
                    <button @click="showComponent = true, selectImage(index, image.name, image.src)">
                        <img class="hover:scale-110 transition ease-in-out delay-10 h-auto max-w-full rounded-lg mt-2" :src="image.src">
                        
                    </button>
                </div>
            </masonry>
        </div>
    </div>  
</template>

<style>

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>