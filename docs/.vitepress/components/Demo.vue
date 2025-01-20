<template>
	<div class="demo">
		<slot></slot>
	</div>
</template>

<style>
  :root{
	--vt-c-bg-mute:#f1f1f1
  }
.demo {
    padding: 22px 24px;
    border-radius: 8px;
    box-shadow: var(--vp-shadow-2);
    margin-bottom: 1.2em;
    transition: background-color .5s ease;
}
.demo button {
    background-color: var(--vt-c-bg-mute);
    transition: background-color .5s;
    padding: 5px 12px;
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    font-size: .9em;
    font-weight: 600;
    color:var(--vp-c-text-1)
}
</style>
