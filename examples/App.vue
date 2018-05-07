<template>
  <div id="app">
    <div class="doc__head">
        <p>version: {{version}}</p>
        <ul>
            <router-link to='/docs/guide/introduce' tag="li" class="docs-link">指南</router-link>
            <router-link to="/docs/component/installation" tag="li" class="docs-link">组件</router-link>
        </ul>
        <h1>
            <img src="https://i.loli.net/2017/12/04/5a251cd8089e2.png" />
        </h1>
    </div>
    <div class="doc__body">
        <router-view></router-view>
    </div>
    <div class="doc__footer">
        <ul>
            <li>
                <h1>核心贡献者：</h1>
                <div class="footer__infos">
                    <div>
                        <img src="https://avatars0.githubusercontent.com/u/17812136?s=40&v=4" />
                        <div>
                            <p>author: 染陌同学</p>
                            <p>github: <a target="_blank" href="https://github.com/answershuto">https://github.com/answershuto</a></p>
                            <p>Email: answershuto@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://avatars0.githubusercontent.com/u/8710568?s=40&v=4" />
                        <div>
                            <p>author: 陈子云</p>
                            <p>github: <a target="_blank" href="https://github.com/everlose">https://github.com/everlose</a></p>
                            <p>Email: ever-lose@foxmail.com</p>
                        </div>
                    </div>
                    <div>
                        <img src="https://avatars0.githubusercontent.com/u/29188938?s=40&v=4" />
                        <div>
                            <p>author: catchonme</p>
                            <p>github: <a target="_blank" href="https://github.com/catchonme">https://github.com/catchonme</a></p>
                            <p>Email: izengdp@163.com</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <h1>社区：</h1>
                <div class="footer__infos">
                    <ul>
                        <li><a target="_blank" href="https://github.com/mo-ui/mo-ui">源码仓库</a></li>
                        <li><a target="_blank" href="https://github.com/mo-ui/mo-ui/issues/new">报告 Bug</a></li>
                        <li><a target="_blank" href="https://github.com/mo-ui/mo-ui/issues">讨论列表</a></li>
                    </ul>
                </div>
            </li>
            <li class="footer__copyright">
                <p>Copyright © 2017</p>
                <p><img src="https://i.loli.net/2017/12/06/5a27ae3ab3a33.png" /></p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import pack from '../package.json';

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
@import './App.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@reset-global pc;
</style>
