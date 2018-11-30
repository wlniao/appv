<template>
  <div>
		<div style="height:3.6rem;">
    <yd-slider autoplay="3000" direction="vertical">
      <yd-slider-item>
        <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
      </yd-slider-item>
      <yd-slider-item>
        <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
      </yd-slider-item>
      <yd-slider-item>
        <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
      </yd-slider-item>
    </yd-slider>
		</div>
		<div class="content red" @click="geo()">geo</div><br/>
		<div class="content red" @click="get()">get</div><br/>
		<div class="content" @click="post()">post</div><br/>
		<div class="content" @click="navigateTo('user/ucenter')">/user/ucenter</div><br/>
		<div class="content" @click="redirectTo('home')">/home</div><br/>
		<div class="content" @click="redirectTo('area')">/area</div><br/>
		
    <yd-switch v-model="switch1"></yd-switch>
    <p>{{title}}: switch1 = {{switch1}}</p>
		<p>{{$store.state.sessionkey}}</p>
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
			}
		},
		methods: {
			navigateTo: function(url) {
				wln.navigateTo(url)
			},
			redirectTo: function(url) {
				wln.redirectTo(url)
			},
			geo: function() {
				let t = this
				wln.getLocation(function(res){
					t.$dialog.alert({mes: JSON.stringify(res)})
				})
			},
			get: function() {
				console.log(this.$store.state.sessionkey)
				wln.get('/api/online', {test: 1,obj:{a1:1,a2:2}},function(res) {
					console.log(res)
				})
			},
			post: function() {
                this.$dialog.notify({
                    mes: '我有一个小毛驴我从来也不骑！',
                    callback: () => {
                        this.$dialog.toast({mes: '你点了确定', timeout: 1000});
                    }
                });
                this.$store.commit('session', {sessionkey:'123'})
				wln.post('/api/online?computer=1', {test: 1},function(res) {
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	
</style>
