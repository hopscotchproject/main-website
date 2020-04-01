<template>
  <div>
    <div
      v-for="({ title, content, links, tech }, index) in portfolio"
      v-bind:key="title"
      class="p-4 md:px-24"
    >
      <div class='flex pb-2'>
        <h1 class="text-lg font-bold my-1 w-2/3">{{title}}</h1>
        <div 
          class="flex flex-row-reverse w-1/3"
        >
          <div
            v-for="{ text, link, type } in links"
            v-bind:key="link"
            class="px-1 md:px-2"
          >
            <npm-link :href="link" v-if="type === 'npm'"/>
            <github-link :href="link" v-else-if="type === 'github'"/>
            <external-link :href="link" v-else/>
          </div>
        </div>
      </div>
      <p :class="`text-sm text-gray-600 my-1 pb-2`">{{content}}</p>
      <div :class="`pb-2 md:pb-6 ${index === portfolio.length - 1 ? '' : 'border-b'}`">
        <span
          v-for="t in tech"
          v-bind:key="t"
          class="text-xs font-thin font-mono font-thin text-gray-700"
        >
          {{t}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { portfolio } from '../data/portfolio'
import ExternalLink from './shared/ExternalLink'
import GithubLink from './shared/GithubLink'
import NpmLink from './shared/NpmLink'

export default {
  name: "Portfolio",
  components: {
    'external-link': ExternalLink,
    'github-link': GithubLink,
    'npm-link': NpmLink
  },
  data: () => ({
    portfolio,
  })
}
</script>