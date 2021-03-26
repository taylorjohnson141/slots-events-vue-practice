<template>
  <div class = 'modal'>
  <slot name="coolModal">
  </slot>
   <slot name="NotCoolModal">
  </slot>
  <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style>
.modal{
  background-color: #E86850;
  margin: 20px;
  box-shadow:rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;;
  border-radius: 10px;
  width: 50%;
  color:black;
  margin-left: auto;
  padding: 20px;
  margin-right: auto;
}

</style>
