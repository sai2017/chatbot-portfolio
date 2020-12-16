import React from 'react';

  interface Props {
    content: any;
    nextId: any;
    select: any;
  }
  
const Answer: React.FC<Props> = ({content, nextId, select}) => {
  return (
    <div>
      <button onClick={() => select(content, nextId)} className='answer-button'>
        {content}
      </button>
    </div>
  )

}

export default Answer;