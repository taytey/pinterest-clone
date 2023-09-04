<template>
    <nav class="bg-gray text-white py-4 font-sans tracking-widest">
      <div class="container mx-auto flex justify-center items-center">
        <ul class="flex space-x-16">
          <li><router-link to="/">home</router-link></li>
          <li class="text-lg">Tayte</li>
          <li><router-link to="/boards">boards</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'navbar'
  };
  </script>
  
  <style scoped>
  /* You can customize styles here if needed */
  </style>
  