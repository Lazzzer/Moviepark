<template>
  <div class="w-full max-w-lg lg:max-w-xs">
    <form @submit.prevent>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search"
          class="block w-full py-2 pl-10 pr-3 leading-5 text-white placeholder-gray-400 transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md focus:outline-none focus:bg-gray-900 sm:text-sm"
          placeholder="Quick search"
          type="search"
        />
      </div>
    </form>
  </div>
</template>
