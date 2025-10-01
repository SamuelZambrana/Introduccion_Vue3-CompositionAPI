<template>
<div class="flex-1 overflow-y-auto p-4">
      <div class="flex flex-col space-y-2">
        <!-- Messages go here -->
        <!-- Example Message -->
        <ChatBubble 
        v-for="message in messages"
        :key="message.id"
        v-bind="message" />

        <!-- El v-bind recorre cada una de las propiedades, no es necesario ponerlo uno a uno
        :its-mine="message.itsMine" 
        :message="message.message"
        :image="message.image"
        -->
      </div>
    </div>

</template>

<script lang="ts" setup>
import type { ChatMessage } from '@/interface/chat-message.interface';
import ChatBubble from './ChatBubble.vue';

interface Props {
  messages: ChatMessage[];
}

defineProps<Props>()

</script>

<style>
    
</style>