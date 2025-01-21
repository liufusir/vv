<template>
	<div ref="codeBlock" class="custom-block" :class="props.Dclass">
		<p class="custom-block-title">{{ Dcontent }}</p>
		<slot></slot>
	</div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
	Dclass: String, //tip 提示（ TIP 注意）， warning 警告（谨慎使用）
	Dcontent: String,
});
</script>
<style lang="less">
:root {
	--vt-c-yellow: #ffc517;
	--vt-c-bg-soft: #f9f9f9;
	--vt-c-brand: #42b883;
	--vt-c-red:#ed3c50;
	--vt-c-yellow:#ffc517;
}
.VPDoc .custom-block code {
	background: var(--vp-code-bg);
	color: var(--vp-code-color);
	font-size: var(--vp-code-font-size);
	border-radius: 4px;
	padding: 3px 6px;
	transition: color 0.25s, background-color 0.5s;
}
.VPDoc .custom-block a {
	color: var(--vp-c-brand-1);
	&:hover {
		color: var(--vp-c-brand-2);
	}
}
</style>
<style scoped lang="less">
.custom-block {
	margin: 28px 0;
	padding: 20px 24px 4px 42px;
	border-radius: 8px;
	overflow-x: auto;
	position: relative;
	font-size: 14px;
	line-height: 1.6;
	font-weight: 500;
	color: #0000008c;
	background: var(--vt-c-bg-soft);
	transition: color 0.5s, background-color 0.5s;
	&.warning {
		border: 1px solid var(--vt-c-yellow);
		&::before {
			content: "⚠";
			font-size: 17px;
			position: absolute;
			top: 19px;
			left: 16px;
		}
	}
	&.tip {
		border: 1px solid var(--vt-c-brand);
		&:before {
			color: var(--vt-c-brand);
		}
	}
	&.custom-block.danger {
		border: 1px solid var(--vt-c-red);
	}

	&.custom-block.danger .custom-block-title,
	&.custom-block.danger:before {
		color: var(--vt-c-red);
	}

	&:before {
		content: "ⓘ";
		position: absolute;
		font-weight: 600;
		font-size: 15px;
		top: 20px;
		left: 17px;
		color: var(--vt-c-yellow);
	}
}
</style>
