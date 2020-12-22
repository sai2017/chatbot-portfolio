import React from 'react';

interface Props {
  color?: string
}

const WorksIcon: React.FC<Props> = ({color}) => {
  return (
    <svg 
      width="30" 
      height="30" 
      viewBox="0 0 30 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 7.5V5H12.5V7.5H17.5ZM5 10V23.75H25V10H5ZM25 7.5C26.3875 7.5 27.5 8.6125 27.5 10V23.75C27.5 25.1375 26.3875 26.25 25 26.25H5C3.6125 26.25 2.5 25.1375 2.5 23.75L2.5125 10C2.5125 8.6125 3.6125 7.5 5 7.5H10V5C10 3.6125 11.1125 2.5 12.5 2.5H17.5C18.8875 2.5 20 3.6125 20 5V7.5H25Z" 
        fill={color || "#DADADA"}
      />
    </svg>
  )
}

export default WorksIcon