import React, { useState, useEffect } from "react";
import defaultDataset from '../dataset';
import '../assets/styles/style.css'
import { AnswersList, Chats } from '../components/index';
import ProfileIcon from '../assets/img/portfolio_icon.png'

const Chatbot: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset] = useState<any>(defaultDataset);

  const displayNextQuestionId = (nextQuestionId: string) => {
    const currentChats: any = chats;
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
        const currentChats: any = chats;
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
    const scrollArea = document.getElementById('scroll-area');

    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  })

  return (
    <section className='c-section' id='scroll-area'>
      <div className='c-box'>
      <div className='first-view-wrap'>
        <img src={ProfileIcon} className='profile-icon' />
        <div className='first-view-name'>HIROAKI SASAKI</div>
        <div className='first-view-portfolio'>PORTFOLIO</div>
      </div>
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
      </div>
    </section>
  );
}

export default Chatbot;
