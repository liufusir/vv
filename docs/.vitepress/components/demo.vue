<template>
  <!-- 这里是模板内容，在函数式组件中通常为空 -->
</template>

<script setup>
// 定义一个函数式组件
const d1 = (props, { slots }) => {
  return (
    <button type="button">
      {props.label}
      {slots.default && slots.default()}
    </button>
  );
};
const d2 = () => {
  return (
    <p>d2</p>
  );
};
// 定义组件的 props
ButtonComponent.props = {
  label: {
    type: String,
    default: 'Click me'
  }
};

// 导出组件
defineExpose({
  d1,d2
});
</script>    
