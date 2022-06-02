<template>
      <div class="bg-violet p-20 md:p-60 text-white">
        <div class="font-bangers  text-5xl font-bold">404</div>
        <p class="text-2xl font-light font-league-gothic leading-normal md:text-3xl">Désolé, cette page n'existe pas.</p>
        <p class="mb-8  font-montserrat">Retournez à la page d'accueil !</p>
        <RouterLink to="/">
            <button
          class="
            focus:shadow-outline-blue
            block
            rounded-lg
            border border-transparent
            bg-blanc
            px-4
            py-4
            text-sm
             font-montserrat
            leading-5
            text-violet
            shadow
            transition-colors
            duration-150
            hover:bg-fushia
            hover:text-blanc
            focus:outline-none
            active:bg-fuchsia-900
            mx-auto
          ">
          Redirection vers la page d'accueil
        </button></RouterLink>
        <form action="https://duckduckgo.com/" method="GET" 
                x-data="{ q:'', }" 
                x-on:submit="q = q + ' site:mmimontbeliard.com'">
          <label for="q">Text à chercher :</label>
          <input type="text" id="q" name="q" x-model="q" class="text-violet font-montserrat">
          <button type="submit" class="text-violet
            mt-20
            mx-20
            p-2
            rounded-lg
            shadow
            transition-colors
            duration-150
            hover:bg-fushia
            hover:text-blanc
            focus:outline-none
            active:bg-fuchsia-900
            bg-blanc">Rechercher</button>
</form>
        
      </div>
</template>
