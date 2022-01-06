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
		color:#ffffff;
	}
	a:hover{
		color:#ffffff;
	}
	#accordionBasicInfo, .accordion-item, .accordion-button{
		background-color: var(--background-color-element);
		color: var(--color-element);
	}
	:global(body.dark-mode) #accordionBasicInfo, :global(body.dark-mode) .accordion-item, :global(body.dark-mode) .accordion-button {
		background-color: var(--background-color-element-dark);
		color: var(--color-element-dark);
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
	<div class="row">
		<div class="col-lg-12 col-md-6 col-sm-12">
			<p class="fs-5">City: {city}</p>
			<p class="fs-5">Birthdate: {birthdate}</p>
		</div>
		<div class="col-lg-12 col-md-6 col-sm-12">
			<p class="fs-5">Phone: {phone}</p>
			<a class="btn btn-primary" href="mailto:{mail}" role="button"><i class="far fa-envelope"></i> {mail} </a>	
		</div>
	</div>


	<div class="accordion" id="accordionBasicInfo">
		<div class="accordion-item">
		  <h2 class="accordion-header" id="headingLenguage">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseLenguage" aria-expanded="false" aria-controls="collapseLenguage">
				<p class="fs-3">Lenguage</p>
			</button>
		  </h2>
		  <div id="collapseLenguage" class="accordion-collapse collapse" aria-labelledby="headingLenguage" data-bs-parent="#accordionBasicInfo">
			<div class="accordion-body">
				<BarsSkills skills={tags.lenguage}/>
			</div>
		  </div>
		</div>
		<div class="accordion-item">
		  <h2 class="accordion-header" id="headingSkills">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSkills" aria-expanded="false" aria-controls="collapseSkills">
				<p class="fs-3">Skills</p>
			</button>
		  </h2>
		  <div id="collapseSkills" class="accordion-collapse collapse" aria-labelledby="headingSkills" data-bs-parent="#accordionBasicInfo">
			<div class="accordion-body">
				<BarsSkills skills={tags.skills}/>
			</div>
		  </div>
		</div>
	</div>
</div>