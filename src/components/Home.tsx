import React, { useState, useEffect } from "react";
import { chatbotDataset } from '../dataset';
import '../assets/styles/style.css'
import { AnswersList, Chats } from './index';
import { ChatbotDatasetModel } from '../models/ChatbotDatasetModel'
import { AnswerModel } from '../models/AnswerModel'
import { ChatModel } from '../models/ChatModel'
import ProfileIcon from '../assets/img/profile_icon.jpg'

const Home: React.FC = () => {
  const [answers, setAnswers] = useState<AnswerModel[]>([]);
  const [chats, setChats] = useState<ChatModel[]>([]);
  const [currentId, setCurrentId] = useState<string>('init');
  const [dataset] = useState<ChatbotDatasetModel>(chatbotDataset);

  const displayNextQuestionId = (nextQuestionId: string) => {
    const currentChats: ChatModel[] = chats;
    currentChats.push({
      text: dataset[nextQuestionId].question,
      type: 'question'
    })

    setAnswers(dataset[nextQuestionId].answers)
    setChats(currentChats)
    setCurrentId(nextQuestionId)
  }

  const selectAnswer = (selectedAnswer: string, nextQuestionId: string) => {
    switch(true) {
      case (nextQuestionId === 'init'):
        displayNextQuestionId(nextQuestionId);
        break;
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
      default:
        const currentChats: ChatModel[] = chats;
        currentChats.push({
          text: selectedAnswer,
          type: 'answer'
        })

        const newChats = Object.assign([], currentChats); 
        setChats(newChats)

        // 相手が回答してから１秒後に次の質問が表示されるように
        setTimeout(() => displayNextQuestionId(nextQuestionId), 1000)
        break;
    }
  }

  useEffect(() => {
    const initAnswer = '';
    selectAnswer(initAnswer, currentId)  
  }, [])

  useEffect(() => {
    const elm = document.documentElement;
    const bottom = elm.scrollHeight - elm.clientHeight;
    window.scroll(0, bottom);
  })

  return (
    <div className='chatPage'>
      <div className='messagesArea'>
        <div className='first-view-wrap'>
          <img src={ProfileIcon} alt='mintoの画像' className='profile-icon' />
          <div className='first-view-name'>minto</div>
          <div className='first-view-portfolio'>UI Desinger</div>
        </div>
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
      </div>
    </div>
  );
}

export default Home;
