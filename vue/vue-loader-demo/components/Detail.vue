<template>
	<strong>
	    {{$route.params | json}}
		<br/>
		<!-- {{$route.query | json}} 可以读取这样的带参-   ?a=10&b=20h -->
		<!-- {{$route.query | json}} -->
	</strong>
</template>