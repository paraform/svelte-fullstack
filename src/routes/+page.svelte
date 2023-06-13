<script lang="ts">
	import type { Task } from '../db/schema';
	export let data: { tasks: Task[] };
</script>

<h1 class="text-3xl font-bold text-red-500 underline">Hello world!</h1>
<div class="container flex flex-col gap-2">
	{#if data.tasks}
		{#each data.tasks as item}
			<div>{item.name}</div>
		{/each}
	{/if}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
