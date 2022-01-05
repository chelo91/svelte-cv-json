<script>
	import BarsSkills from './BarsSkills.svelte';

	export let city="";
	export let birthdate="";
	export let mail="";
	export let phone="";
	export let links={};
	export let tags={};

</script>
<style>
    .btn{
		margin-bottom: 10px;
	}
	a{
		color:white;
	}
	a:hover{
		color:black;
	}
</style>

<div class="py-3 text-start">
	<p class="text-center">
		{#if links.github !== undefined}
			<a class="btn btn-primary" href="{links["github"]}" role="button"><i class="fab fa-github"></i></a>
		{/if}
		{#if links.facebook !== undefined}
			<a class="btn btn-primary" href="{links["facebook"]}" role="button"><i class="fab fa-facebook"></i></a>
		{/if}
		{#if links.instagram !== undefined}
			<a class="btn btn-primary" href="{links["instagram"]}" role="button"><i class="fab fa-instagram"></i></a>
		{/if}
		{#if links.linkedin !== undefined}
			<a class="btn btn-primary" href="{links["linkedin"]}" role="button"><i class="fab fa-linkedin"></i></a>
		{/if}
		{#if links.web !== undefined}
			<a class="btn btn-primary" href="{links["web"]}" role="button"><i class="fas fa-user-circle"></i></a>
		{/if}
	</p>
	<p class="fs-5">City: {city}</p>
	<p class="fs-5">Birthdate: {birthdate}</p>
	<p class="fs-5">Phone: {phone}</p>
	<a class="btn btn-primary" href="mailto:{mail}" role="button"><i class="far fa-envelope"></i> {mail} </a>	
	<p class="fs-5">Lenguage</p>
	<BarsSkills skills={tags.lenguage}/>
	<p class="fs-5">Skills</p>
	<BarsSkills skills={tags.skills}/>

</div>