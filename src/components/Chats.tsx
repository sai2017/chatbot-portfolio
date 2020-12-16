import React from 'react';
import { Chat } from '../components/index';

  interface Props {
    chats: any;
  }
  
const Chats: React.FC<Props> = ({chats}) => {
  return (
    <div>
      {
        chats.map((chat: any, index: any) => {
          return <Chat text={chat.text} type={chat.type} key={index.toString()}/>
        })
      }
    </div>  )

}

export default Chats;