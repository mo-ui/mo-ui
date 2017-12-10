<template>
  <div>
      <mo-row>
          <mo-col :xs="24" :sm="24" :md="6" :lg="4">
              <div class="docs__navigation">
                  <ul class="docs__navigation__item">
                      <template v-for="item in getCurrentRouteMap.children">
                          <router-link v-if="!item.children" class="docs__navigation__item--first" :to="getCurrentRouteMap.path+'/'+item.name" tag="li" >{{item.alias}}</router-link>
                          <li v-else>
                              <div class="docs__navigation__item--no-choose">{{item.alias}}</div>
                              <ul>
                                  <li class="docs__navigation__item--secend" v-for="component in item.children">{{component.alias}}</li>
                              </ul>
                          </li>
                      </template>
                  </ul>
              </div>
          </mo-col>
          <mo-col :xs="24" :sm="24" :md="18" :lg="20">
              <div class="docs__display-area markdown-body">
                  <router-view></router-view>
              </div>
          </mo-col>
      </mo-row>

  </div>
</template>

<script>
import map from '../router/routeMap'

export default {
    name: 'docs',
    props: {
    },
    methods: {
    },
    computed: {
        getCurrentRouteMap () {
            return map.filter((r) => this.$route.path.indexOf(r.path) >= 0)[0];
        }
    }
};
</script>

<style lang="postcss">
@import "github-markdown-css";
@import 'highlight.js/styles/atelier-cave-light.css';
@import "../../src/style/common/var.css";

.docs__navigation{
    .router-link-active{
        color: var(--color-primary);
        background: color(var(--color-primary) alpha(10%));
        border-right: 3px solid var(--color-primary);
    }
}

.docs__navigation__item{
    &--first, &--no-choose{
        white-space: nowrap;
        padding-left: 25px;
        padding-top: 15px;
        padding-bottom: 15px;
        color: var(--color-background-color);
    }

    &--no-choose{
        cursor: default;
        font-weight: bold;
    }

    &--first{
        cursor: pointer;

        &:hover{
            color: var(--color-primary);
        }
    }
}

.docs__display-area{

}
</style>

