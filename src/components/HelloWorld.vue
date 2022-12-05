<template>
  <div>
    <div style="text-align: center; font-size: 32px;">{{ msg }}</div>
    <div style="text-align: center">{{ moreMsg }}</div>
  </div>
</template>

<script lang="ts">
class Msg {
  public msg: string = "hello world";
  GetMoreMsg(): string {
    return "看来是真到开发好了.哈哈哈";
  }
}
//创建msg对象
let MsgObj = new Msg();
export default {
  name: "Hello",
  data() {
    return {
      msg: MsgObj.msg,
      moreMsg: MsgObj.GetMoreMsg(),
    };
  },
};
</script>
