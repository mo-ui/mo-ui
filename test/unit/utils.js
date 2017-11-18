import Vue from 'vue';

let id = 0;

const createElm = function () {
  const elm = document.createElement('div');

  id += 1;
  elm.id = `app${id}`;
  document.body.appendChild(elm);

  return elm;
};

/**
 * 回收 vm
 * @param  {Object} vm
 */
exports.destroyVM = function (vm) {
  vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el);
};

/**
 * 创建一个 Vue 的实例对象
 * @param  {Object|String}  Compo   组件配置，可直接传 template
 * @param  {Boolean=false} mounted 是否添加到 DOM 上
 * @return {Object} vm
 */
exports.createVue = function (Compo, mounted = false) {
  if (Object.prototype.toString.call(Compo) === '[object String]') {
    Compo = {
      template: Compo
    };
  }
  return new Vue(Compo).$mount(mounted === false ? null : createElm());
};

