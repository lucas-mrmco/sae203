<template>
  <header class=" top-0 fixed z-50 flex h-16 w-screen items-center">
    <Menu1 class="absolute right-4 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
    <Close class="absolute right-4 z-50 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
    <RouterLink class="p-4" to="/"><img src="../../../public/logo/logo-xl-color.png" class="w-32 " alt=""></RouterLink>
    <nav
      class="absolute left-0 top-0 bottom-0 right-0 h-screen -translate-x-full bg-gradient-to-br from-fushia to-violet opacity-0"
      :class="MenuOpen && 'translate-x-0 opacity-100'"
    >
      <ul class="flex  flex-col items-center justify-center text-left text-3xl font-bold">
        
        <li>
          <RouterLink to="/programmation" @click="MenuOpen = !MenuOpen"><BoutonTransparent>Le festival</BoutonTransparent> </RouterLink>
        </li>
        <li>
          <RouterLink to="/festival" @click="MenuOpen = !MenuOpen"><BoutonTransparent>Le festival</BoutonTransparent></RouterLink>
        </li>
        <li>
          <RouterLink to="/concerts" @click="MenuOpen = !MenuOpen"><BoutonTransparent>Le festival</BoutonTransparent></RouterLink>
        </li>
        <li>
          <RouterLink to="/artistes" @click="MenuOpen = !MenuOpen"><BoutonTransparent>Le festival</BoutonTransparent></RouterLink>
        </li>
        
        <li>
          <RouterLink to="/festival/#billeterie" @click="MenuOpen = !MenuOpen"><BoutonTransparent>Le festival</BoutonTransparent></RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>


<script>
import Menu from"../icons/Menu.vue"
import Menu1 from "../icons/Menu.vue";
import BoutonTransparent from "../buttons/BoutonTransparent.vue";
import Close from "../icons/Close.vue";
export default {
  data() {
    return {
      MenuOpen: false,
    };
  },
  components: { Menu, Menu1, BoutonTransparent, Close },
};
</script> 