<template id="app">
<yd-layout>
  <router-view></router-view>
  <yd-tabbar slot="tabbar" :exact="false">
    <yd-tabbar-item :title="item.title" :link="item.link" v-for="(item,index) in tabbar" :key="index" :active="item.active" active-color="#ff524f">
			<yd-icon :name="item.icon" slot="icon"></yd-icon>
    </yd-tabbar-item>
  </yd-tabbar>
</yd-layout>
</template>
<script type="text/javascript">
import wln from './wlnapp'
export default {
  data() {
    return {
      tabbar: [
        { title: "首页", icon: "home", link: "/",  active: false },
        { title: "购物车", icon: "shopcart", link: "/area", active: false },
        { title: "个人中心", icon: "ucenter-outline", link: "/user/ucenter", active: false }
      ]
    };
  },
  watch: {
    $route: {
      handler: function(obj) {
        this.navActive(obj.path)
      },
      deep: true
    }
  },
  methods: {
    navActive: function(path) {
      let tmp = this.tabbar
      path = path == '/home' ? '/' : path
      for (var i = 0; i < tmp.length; i++) {
        tmp[i].active = tmp[i].link == path
      }
      this.tabbar = tmp
    }
  },
  mounted() {
		let t = this
    if (wln.InBrowser) {
			if (localStorage.sessionkey) {
				t.$store.commit('session', {sessionkey: localStorage.sessionkey})
			}
      t.navActive(location.pathname)
    }
  }
};
</script>
<style>
  @import "./App.css";
</style>