<script>


    export default {
        name: 'Imagecard',
        
        return: {
            showComponent: false,
        }

};
</script>
<template>
    <div id="card" class="z-50 box-border h-3000 w-200 p-4 border-4 bg-gray-300">
        <h1>Test</h1>
        <button @click="showComponent = false">
            <h1>Close</h1>
        </button>
    </div>
</template>