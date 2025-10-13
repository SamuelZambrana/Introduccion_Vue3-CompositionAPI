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

const getHerResponse = async (text: string) => {
  const res = await fetch('https://api.example.com/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: text }),
  })

  if (!res.ok) {
    throw new Error('Failed to fetch response')
  }

  return res.json()
}

const onMessage = async ( text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  })

  if ( !text.endsWith('?')) return;

  const { message } = await getHerResponse(text)

  messages.value.push({
    id: new Date().getTime() + 1,
    itsMine: false,
    message,
  })

}

return {
    // Properties
    messages,

    //Methods
    onMessage,
}
}