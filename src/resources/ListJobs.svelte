<script>
	import List from './List.svelte'

	export let arrayJobs={};

	const newArray = arrayJobs.map(job => {
  		return { title: job.name, subtitle: job.job, badge: job.begin + " - " + (job.end || "Present")};
	});

</script>

<style>
    
</style>

<h1>Jobs</h1>
<List array={newArray}/>