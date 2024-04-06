<script>
	//import * as cvjson from "../dataTest.json";
	import { fakeJson as cvjson } from "./fakeJson.js";
	import BtnDarkMode from "./resources/BtnDarkMode.svelte";
	import BasicInfo from "./resources/BasicInfo.svelte";
	import ListJobs from "./resources/ListJobs.svelte";
	import ListEducation from "./resources/ListEducation.svelte";
	import Footer from "./resources/Footer.svelte";
</script>

<div id="App">
	<div class="container">
		<div class="row">
			<div class="col-10">
				<h1>{cvjson.name}</h1>
				<h2>{cvjson.title}</h2>
			</div>
			<div class="col-2 text-end">
				<BtnDarkMode>
					<i class="far fa-moon"></i>
				</BtnDarkMode>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-3 col-lg-5 col-12 text-center">
				<!-- svelte-ignore a11y-missing-attribute -->
				<img
					id="photo"
					class="rounded-circle border"
					src={cvjson.photo}
					data-holder-rendered="true"
				/>
				<BasicInfo {...cvjson} />
			</div>
			<div class="col-xl-9 col-lg-7 col-12 py-3">
				<ListJobs arrayJobs={cvjson.jobs} />
				<br />
				<ListEducation arrayEducation={cvjson.education} />
			</div>
		</div>
	</div>
	<Footer></Footer>
</div>

<style>
	:global(:root) {
		--background-color: #f2e9e4;
		--background-color-dark: #001d3d;
		--color: #001d3d;
		--color-dark: #f2e9e4;
		--background-color-element: #ffffff;
		--background-color-element-dark: #003566;
		--color-element: #003566;
		--color-element-dark: #ffffff;
	}
	:global(body) {
		background-color: var(--background-color);
		color: var(--color);
		transition: background-color 0.3s;
		font-family: "Roboto", sans-serif;
	}
	:global(body.dark-mode) {
		background-color: var(--background-color-dark);
		color: var(--color-dark);
	}
	#photo {
		width: 200px;
		height: 200px;
	}
	#App {
		padding-top: 15px;
	}
</style>
