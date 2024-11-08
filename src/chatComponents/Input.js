import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Input({onSendMessage}) {
  const [text, setText] = useState('');

  function onChange(e) {
    const text = e.target.value;
    setText(text);
  }

  function onSubmit(e) {
    e.preventDefault();
    setText('');
    onSendMessage(text);
  }
  
  return (
    <div className={styles.input}>
      <form onSubmit={e => onSubmit(e)}>
      <input
          onChange={e => onChange(e)}
          value={text}
          type='text'
          placeholder='文章を入れてEnter'
          autoFocus
      />
      <button>おくる</button>
      </form>
    </div>
  );
}