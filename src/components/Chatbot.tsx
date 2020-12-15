import React, { useState, useEffect } from "react";
import defaultDataset from '../dataset';
import '../assets/styles/style.css'
import { AnswersList, Chats } from '../components/index';

const Chatbot: React.FC = () => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState('init');
  const [dataset] = useState<any>(defaultDataset);
  const [open, setOpen] = useState(false);

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

  const selectAnswer = (selectedAnswer: any, nextQuestionId: any) => {
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

        setChats(currentChats)

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
    <section className='c-section'>
      <div className='c-box'>
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
      </div>
    </section>
  );
}

export default Chatbot;
