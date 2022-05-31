<template>
  <h1 class="text-4xl mttext-center m-3 text-gray-600">Guide de styles</h1>

  <h2 class="font-inter font-bold text-xl m-4">Colors</h2>

  <h3 class="font-inter font-bold text-lg m-4">Main Colors</h3>

  <div class="flex space-x-4 m-4">
    <div class="bg-violet w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-fushia w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-gris w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-white w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
    <div class="bg-bleu w-20 h-10 rounded shadow-xl border-2 border-gris"></div>
  </div>

  <h3 class="font-inter font-bold text-lg m-4">Shades of Indigo</h3>

  <div class="flex m-4">
    <div class="bg-blue-50 w-20 h-10 rounded-l-lg"></div>
    <div class="bg-indigo-50 w-20 h-10"></div>
    <div class="bg-indigo-100 w-20 h-10"></div>
    <div class="bg-indigo-200 w-20 h-10"></div>
    <div class="bg-indigo-300 w-20 h-10 rounded-r-lg"></div>
  </div>
  <div class="flex m-4">
    <div class="bg-gray-50 w-20 h-10 rounded-l-lg"></div>
    <div class="bg-gray-100 w-20 h-10"></div>
    <div class="bg-gray-200 w-20 h-10"></div>
    <div class="bg-gray-300 w-20 h-10"></div>
    <div class="bg-gray-400 w-20 h-10 rounded-r-lg"></div>
  </div>

  <div class="flex m-4">
    <div class="bg-gray-500 w-20 h-10 rounded-l-lg"></div>
    <div class="bg-gray-600 w-20 h-10"></div>
    <div class="bg-gray-700 w-20 h-10"></div>
    <div class="bg-gray-800 w-20 h-10"></div>
    <div class="bg-gray-900 w-20 h-10 rounded-r-lg"></div>
  </div>
   <h2 class="font-inter font-bold text-xl m-4">Icons</h2>
   <div class="flex m-4">
  <FireIcon class="w-8 m-3" />
  <BadgeCheckIcon class="w-8 m-3" />
  <BookOpenIcon class="w-8 m-3" />
  <CakeIcon class="w-8 m-3" />
  <ChevronDoubleDownIcon class="w-8 m-3" />
  </div>
  <div class="flex m-4">
  <ClipboardCheckIcon class="w-8 m-3" />
  <CloudDownloadIcon class="w-8 m-3" />
  <ChatAlt2Icon class="w-8 m-3" />
  <MenuAlt2Icon class="w-8 m-3" />
  <CubeIcon class="w-8 m-3" />
  </div>
  <h2 class="font-inter font-bold text-xl m-4">Typography</h2>
  <h6 class="font-inter font-bold text-7xl m-4 text-gray-700">The quick brown fox jum...</h6>
  <h6 class="font-inter font-bold text-4xl m-4 text-gray-700">The quick brown fox jumps over the laz...</h6>
  <h6 class="font-inter font-bold text-3xl m-4 text-gray-700">The quick brown fox jumps over the lazy dog</h6>
  <h2 class="font-inter font-bold text-xl m-4">Molécules</h2>

  <div class="flex mx-9 my-9">
  <div>
    <div class="form-check">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
      <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
        Default checkbox
      </label>
    </div>
    <div class="form-check">
      <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
      <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
        Checked checkbox
      </label>
    </div>
  </div>
</div>
 <div class="flex m-4">
  <bouton class="w-3 m-9">Bouton</bouton>
   <bouton><PlusIcon class="w-8 m-3" />Bouton</bouton>
  </div>

   
</template>
<script >
// import Bouton from "./components/Bouton.vue";
// import { FireIcon, BadgeCheckIcon, BookOpenIcon, CakeIcon, ChevronDoubleDownIcon, ClipboardCheckIcon, CloudDownloadIcon, ChatAlt2Icon, MenuAlt2Icon, CubeIcon, PlusIcon  } from "@heroicons/vue/solid";
// export default {
//   name: "App",
//   components: { Bouton, FireIcon, BadgeCheckIcon, BookOpenIcon, CakeIcon, ChevronDoubleDownIcon, ClipboardCheckIcon, CloudDownloadIcon, ChatAlt2Icon, MenuAlt2Icon, CubeIcon, PlusIcon },
// };

</script>
