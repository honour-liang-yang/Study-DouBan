<template>
	<div>
		<banner></banner>
	</div>
</template>

<script>
	import Banner from '../components/Banner.vue'
	
	
	export default{
		name:'status-view',
		components:{Banner},
		data(){
			return {
				items:new Array(10)
			}
		}
	}
	
</script>

<style>
</style>
