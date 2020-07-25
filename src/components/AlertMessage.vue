<template>
  <div class="message-alert">
    <div
      v-for="(item , i) in messages"
      :key="i"
      class="alert alert-dismissible"
      :class="'alert-' + item.status"
    >
      {{ item.message }}
      <button
        type="button"
        class="close"
        aria-label="Close"
        @click="removeMessage(i)"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertMessage",
  data() {
    return {
      messages: []
    };
  },
  created() {
    const vm = this;
    vm.$bus.$on("message:push", (message, status = "warning") => {
      vm.updateMessage(message, status);
    });
  },
  methods: {
    updateMessage(message, status) {
      const timestamp = Math.floor(new Date() / 1000);
      this.messages.push({
        message,
        status,
        timestamp
      });
      this.removeMessageWithTiming(timestamp);
    },
    removeMessage(num) {
      this.messages.splice(num, 1);
    },
    removeMessageWithTiming(timestamp) {
      const vm = this;
      setTimeout(() => {
        vm.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            vm.messages.splice(i, 1);
          }
        });
      }, 6000);
    }
  }
};
</script>

<style lang="scss" scope>
.message-alert {
  position: fixed;
  max-width: 265px;
  top: 60px;
  right: 20px;
  z-index: 1100;
  .close {
    outline: 0;
    &:focus {
      outline: 0;
    }
  }
}
</style>