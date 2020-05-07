import React, { useState, createContext, useEffect } from 'react';
import { firestore } from '../firebase';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const unsubscribeFromFirestore = firestore
      .collection("content")
      .onSnapshot(snapshot => {
        const firestoreContent = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        setContent(firestoreContent);
      });
    return () => {
      unsubscribeFromFirestore();
    };
  }, []);


  console.log(content)

  return (
    <GlobalContext.Provider
      value={content}
    >
      {children}
    </GlobalContext.Provider>
  );

}