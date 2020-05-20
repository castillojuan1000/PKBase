import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext'

export const JavaScript = () => {

  //we are fetching the data from global context 
  const content = useContext(GlobalContext);

  //sorting  content with category of css and date created from newest to oldest 
  const arrJavaScriptContent = content.filter(obj => obj.category === 'JavaScript').sort((a, b) => {
    return b.createdAt.seconds - a.createdAt.seconds;
  })


  return (
    <>
      {
        arrJavaScriptContent.map(item => {
          return (<><h1>{item.title}</h1><hr style={{ background: 'green' }} /></>)
        })
      }
    </>

  )
}