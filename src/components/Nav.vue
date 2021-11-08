<template>
<div class="font-extrabold text-yellow-500 bg-blue-800 ">
<div class="container flex items-center justify-between mx-auto ">
    <!-- added router link to basicrouter icon -->
    <router-link to="/">
    <h1 class="px-4 py-8 text-3xl font-thin tracking-tighter over:cursor-pointer hover:bg-white hover:text-yellow-800">FakeAuth
        <span class="font-normal">Vue</span>
    </h1>
    </router-link>
    <nav>
    <ul class="flex space-x-4" >
        <!-- below are three different ways of routing, all are working -->
        <!-- notes for if need to reference later -->
        <router-link to="/">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-white hover:text-yellow-800">Homepage</li></router-link>
        <router-link :to="{name: 'About'}">
         <li class="px-4 py-8 hover:cursor-pointer hover:bg-white hover:text-yellow-800">About</li>
        </router-link>
        <router-link :to="{ path: '/login', name: 'Login'}">
        <li class="px-4 py-8 hover:cursor-pointer hover:bg-white hover:text-yellow-800">Login</li>
        </router-link>
    </ul>
    </nav>
</div>
</div>
</template>