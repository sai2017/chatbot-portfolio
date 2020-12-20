import React from 'react';
import { Chat } from '../components/index';
import { ChatModel } from '../models/ChatModel'

interface Props {
  chats: ChatModel[];
}
  
const Chats: React.FC<Props> = ({chats}) => {
  return (
    <div>
      {
        chats.map((chat: ChatModel, index: number) => {
          return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
        })
      }
    </div>  )

}

export default Chats;