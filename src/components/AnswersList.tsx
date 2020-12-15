import React from 'react';
import { Answer } from './index';

interface Props {
  answers: any | undefined;
  select: any;
}

const AnswersList: React.FC<Props> = ({answers, select}) => {
  return (
    <div className='c-grid__answer'>
      {answers ? (
        answers.map((answer: any, index: any) => {
          return <Answer content={answer.content} nextId={answer.nextId} key={index.toString()} select={select} />
        })
      ) : null}
    </div>
  )
}

export default AnswersList;
