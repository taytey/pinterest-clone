<script>
import Imagepanel from './imagepanel.vue';

    export default {
        name: 'ImageCard',
        props: {
            index: Number,
            name: String,
            src: String,
        },

        methods: {
            closeImagecard() {
                this.$emit('close-imagecard');
            }
        },

};


</script>
 <template>
    <Teleport to="body">
        <div class="fixed w-4/5 h-150 z-10 top-60 left-10 bg-slate-900">
            <div>
                <h1>{{ index }}</h1>
                <h1>{{ name }}</h1>
                <img class="hover:scale-110 transition ease-in-out delay-10 h-auto max-w-full rounded-lg mt-2" :src="src">
                <button @click="$emit(closeImagecard())">X</button>
            </div>
        </div>
    </Teleport>
   
</template>