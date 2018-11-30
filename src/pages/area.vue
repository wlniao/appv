<template>
  <div>
    <yd-flexbox>
      <div>div</div>
      <yd-flexbox-item><yd-search v-model="searchkey" :on-submit="toSearch"></yd-search></yd-flexbox-item>
    </yd-flexbox>
		<div class="content" @click="notify()">notify</div><br/>
		<div class="content" @click="navigateTo('user/ucenter')">/user/ucenter</div><br/>
		<div class="content" @click="redirectTo('home')">/home</div><br/>
		<div class="content red" @click="geo()">geo</div><br/>
		
    <yd-switch v-model="switch1"></yd-switch>
    <p>{{title}}: switch1 = {{switch1}}</p>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import wln from '../wlnapp'
	export default {
		data() {
			return {
			  title: 'Hello',
			  switch1: false,
			  searchkey: ''
			}
		},
		methods: {
			navigateTo: function(url) {
				wln.navigateTo(url)
			},
			redirectTo: function(url) {
				wln.redirectTo(url)
			},
			toSearch: function(url) {
				wln.navigateTo(url)
			},
			geo: function() {
				let t = this
				console.log(this.$store.state.sessionkey)
				wln.getLocation(function(res){
					t.$dialog.alert({mes: JSON.stringify(res)})
				})
			},
			notify: function() {
				let t = this
                this.$dialog.notify({
                    mes: t.$store.state.sessionkey,
                    callback: () => {
                        this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                    }
                });
			}
		}
	}
</script>

<style>
	
</style>
