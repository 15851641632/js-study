<template>
	<ul>
	   <li v-for="value in list">{{value}}</li>
	</ul>	
</template>
<script>
	export default{
	 data(){
	    return {
	        list:['apple','pear','banana']
	    }
	 }
	}

</script>
<style></style>