<script>
	import List from './List.svelte'

	export let arrayEducation={};

	const newArray = arrayEducation.map(study => {
  		return { title: study.name, subtitle: study.institute, badge: study.begin + " - " + (study.end || "Present")};
	});

</script>

<style>
    
</style>
<h1>Education</h1>
<List array={newArray}>
</List>