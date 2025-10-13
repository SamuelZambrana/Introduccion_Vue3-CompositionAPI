<template>
  <div class="flex-1 overflow-y-auto p-4" ref="chatRef">
    <div class="flex flex-col space-y-2">
      <ChatBubble 
        v-for="message in messages"
        :key="message.id"
        v-bind="message" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ChatMessage } from '@/interface/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(() => messages, () => {
  if (!chatRef.value) return;

  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth'
    });
  }, 50);
});
</script>
<style scoped></style>
