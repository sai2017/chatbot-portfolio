import React from 'react';

  interface Props {
    content: any;
    nextId: any;
    select: any;
  }
  
const Answer: React.FC<Props> = props => {
  return (
    <div>
      <button onClick={() => props.select(props.content, props.nextId)} className='answer-button'>
        {props.content}
      </button>
    </div>
  )

}

export default Answer;