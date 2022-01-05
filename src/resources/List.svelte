<script>
    export let array={};
</script>

<style>
    ul,li {
		background-color: #d6d2c7;
		color: #0066c0;
	}
	:global(body.dark-mode) ul, :global(body.dark-mode) li {
		background-color: #2c4961;
		color: #d9dce2;
	}

</style>

<ul class="list-group">
    {#each array as obj}
		<li class="list-group-item d-flex justify-content-between align-items-start">
			<div class="ms-2 me-auto">
				<div class="">
					<h3>{obj.title}</h3>
					<h5>{obj.subtitle}</h5>
				</div>
			</div>
			<h4><span class="badge bg-primary rounded-pill">{obj.badge}</span></h4>
		</li>
	{/each}
  </ul>
    
    