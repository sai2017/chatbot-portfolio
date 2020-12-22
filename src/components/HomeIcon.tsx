import React from 'react';

interface Props {
  color?: string
}

const HomeIcon: React.FC<Props> = ({color}) => {
  return (
    <svg
      width="30" 
      height="30"
      viewBox="0 0 30 30"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M15 7.1125L21.25 12.7375V22.5H18.75V15H11.25V22.5H8.75V12.7375L15 7.1125ZM15 3.75L2.5 15H6.25V25H13.75V17.5H16.25V25H23.75V15H27.5L15 3.75Z" 
        fill={color || "#DADADA"} 
      />
    </svg>
  )
}

export default HomeIcon