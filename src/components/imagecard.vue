<script>
import Imagepanel from './imagepanel.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

    export default {
        name: 'ImageCard',
        props: {
            name: String,
            src: String,
        },

        methods: {
            closeImagecard() {
                this.$emit('close-imagecard');
            }
        },

        components: {
            XMarkIcon,
        },

};


</script>
 <template>
        <Teleport to="body">
        <div class="h-screen flex items-center justify-center">
            <div class="w-1/2 h-150 z-10 bg-zinc-900 bg-opacity-95 rounded-lg">
            <div class="m-4">
                <div class="flex justify-end">
                    <XMarkIcon class="text-white h-6 w-6" @click="$emit(closeImagecard())" />
                </div>
                <h1 class="text-6xl text-zinc-500">{{ name }}</h1>
                <img class=" hover:scale-110 transition ease-in-out delay-10 h-auto max-w-xl max-h-96 rounded-lg mt-2" :src="src">
            </div>
        </div>
        </div>
    </Teleport>
    
</template>

<style>

</style>