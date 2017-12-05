<template>
  <div id="app">
    <div class="doc__head">
        <p>version: {{version}}</p>
        <ul>
            <router-link :class="{'docs-link--choose': $route.name === 'guide'}" to="/docs/guide" tag="li" class="docs-link">指南</router-link>
            <router-link :class="{'docs-link--choose': $route.name === 'component'}" to="/docs/component" tag="li" class="docs-link">组件</router-link>
        </ul>
        <h1>
            <img src="https://i.loli.net/2017/12/04/5a251cd8089e2.png" />
        </h1>
    </div>
    <div class="doc__body">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import pack from '../package.json';
console.log('pack.version', pack.version);
export default {
    name: 'app',
    data () {
        return {
            version: pack.version
        };
    }
}
</script>

<style lang="postcss">
@reset-global pc;
@import './App.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
