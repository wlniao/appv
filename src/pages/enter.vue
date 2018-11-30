<template>
  <div>
		enter
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
				wln.getLocation(function(res){
					t.$dialog.alert({mes: JSON.stringify(res)})
				})
			}
		},
		created() {
			let t = this
			let sessionkey = t.$route.query.sessionkey
			if (sessionkey) {				
				localStorage.setItem('sessionkey', sessionkey)
				t.$store.commit('session', {sessionkey: sessionkey})
			}
			wln.redirectTo('home')
		}
	}
</script>

<style>
	
</style>
