import React from 'react';
import { Answer } from './index';
import { AnswerModel } from '../models/AnswerModel'

interface Props {
  answers: AnswerModel[];
  select: (selectedAnswer: string, nextQuestionId: string) => void;
}

const AnswersList: React.FC<Props> = ({answers, select}) => {
  return (
    <div className='c-grid__answer'>
      {answers ? (
        answers.map((answer: AnswerModel, index: number) => {
          return <Answer content={answer.content} nextId={answer.nextId} key={index.toString()} select={select} />
        })
      ) : null}
    </div>
  )
}

export default AnswersList;
