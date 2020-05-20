import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext'

export const Interview = () => {

  //we are fetching the data from global context 
  const { content } = useContext(GlobalContext);

  //sorting  content with cat of css and date created from newest to oldest 
  // const arrInterviewContent = content.filter(obj => obj.category === 'Interview').sort((a, b) => {
  //   return b.createdAt.seconds - a.createdAt.seconds;
  // })


  return (
    <h1>Interview component</h1>
  )
}