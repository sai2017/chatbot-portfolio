import React from 'react';

interface Props {
  color?: string
}

const AboutIcon: React.FC<Props> = ({color}) => {
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
        d="M15 5C12.2375 5 10 7.2375 10 10C10 12.7625 12.2375 15 15 15C17.7625 15 20 12.7625 20 10C20 7.2375 17.7625 5 15 5ZM17.5 10C17.5 8.625 16.375 7.5 15 7.5C13.625 7.5 12.5 8.625 12.5 10C12.5 11.375 13.625 12.5 15 12.5C16.375 12.5 17.5 11.375 17.5 10ZM22.5 21.25C22.25 20.3625 18.375 18.75 15 18.75C11.625 18.75 7.75 20.3625 7.5 21.2625V22.5H22.5V21.25ZM5 21.25C5 17.925 11.6625 16.25 15 16.25C18.3375 16.25 25 17.925 25 21.25V25H5V21.25Z" 
        fill={color || "#DADADA"}
      />
    </svg>
  )
}

export default AboutIcon