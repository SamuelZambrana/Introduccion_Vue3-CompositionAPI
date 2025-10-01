import type { ChatMessage } from "@/interface/chat-message.interface"
import { ref } from "vue"

export const useChat = () => {

    const messages = ref<ChatMessage[]>(
  [
    {
      id: new Date().getTime(),
      message: 'Hola mundo',
      itsMine: true,

    },
    {
      id: new Date().getTime() + 1,
      message: 'No!!',
      itsMine: true,

    }
  ]
)

const onMessage = ( text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  })
}

return {
    // Properties
    messages,

    //Methods
    onMessage,
}
}