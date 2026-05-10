<script lang="ts">
	import { Svelvet, Node } from '$lib';
</script>

<div class="graphs">
	<div data-testid="graph-one">
		<Svelvet id="graph-one" width={400} height={260}>
			<Node id="one-source" label="One source" position={{ x: 40, y: 40 }} />
			<Node id="one-target" label="One target" position={{ x: 240, y: 140 }} />
		</Svelvet>
	</div>

	<div data-testid="graph-two">
		<Svelvet id="graph-two" width={400} height={260}>
			<Node id="two-source" label="Two source" position={{ x: 40, y: 40 }} />
			<Node id="two-target" label="Two target" position={{ x: 240, y: 140 }} />
		</Svelvet>
	</div>
</div>

<style>
	.graphs {
		display: flex;
		gap: 24px;
		padding: 24px;
	}

	.graphs > div {
		border: 1px solid #999;
	}
</style>
