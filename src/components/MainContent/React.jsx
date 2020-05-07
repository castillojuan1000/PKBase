import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext'

export const ReactComponent = () => {

  //we are fetching the data from global context 
  const { content } = useContext(GlobalContext);

  //sorting  content with cat of css and date created from newest to oldest 
  const arrReactContent = content.filter(obj => obj.category === 'React').sort((a, b) => {
    return b.createdAt.seconds - a.createdAt.seconds;
  })

  return (
    <h1>React component</h1>
  )
}