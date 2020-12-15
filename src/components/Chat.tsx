import React from 'react';

interface Props {
  text: any;
  type: any;
}

const Chat: React.FC<Props> = ({text, type}) => {
  const isQuetion = (type === 'question');
  const classes = isQuetion ? 'p-chat__row' : 'p-chat__reverse';
  return (
    <div className={classes}>
      {
        isQuetion ? (
          <div className='p-chat__bubble admin-text'>{text}</div>
        ) : (
          <div className='p-chat__bubble guest-text'>{text}</div>
        )
      }
    </div>

  )

}

export default Chat;