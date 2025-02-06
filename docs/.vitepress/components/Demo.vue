<template>
	<div class="demo">
		<slot></slot>
	</div>
</template>


<style>
  :root{
	--vt-c-bg-mute:#f1f1f1;
  --vt-shadow-2:0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07);
  --vt-c-bg-soft: #f9f9f9;
  --vt-c-divider:rgb(60 60 60 / 29%);
  }

.demo {
    padding: 22px 24px;
    border-radius: 8px;
    box-shadow: var(--vt-shadow-2);
    margin-bottom: 1.2em;
    transition: background-color .5s ease
}

.dark .demo {
    background-color: var(--vt-c-bg-soft)
}

.demo p {
    margin: 0
}

.demo button {
    background-color: var(--vt-c-bg-mute);
    transition: background-color .5s;
    padding: 5px 12px;
    border: 1px solid var(--vt-c-divider);
    border-radius: 8px;
    font-size: .9em;
    font-weight: 600
}

.demo button+button {
    margin-left: 1em
}

.demo input,.demo textarea,.demo select {
    border: 1px solid var(--vt-c-divider);
    border-radius: 4px;
    padding: .2em .6em;
    margin-top: 10px;
    background: transparent;
    transition: background-color .5s
}

.dark .demo select {
    background: var(--vt-c-bg-soft)
}

.dark .demo select option {
    background: transparent
}

.demo input:not([type]):focus,.demo textarea:focus,.demo select:focus {
    outline: 1px solid blue
}

.demo label {
    margin: 0 1em 0 .4em
}

.demo select[multiple] {
    width: 100px
}

.demo h1 {
    margin: 10px 0 0
}
</style>
