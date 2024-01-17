import './App.css';
import { useState } from 'react';

function App() {
  const [sent, setSent] = useState('')
  const [show, setShow] = useState('');

  function handleInp(e) {
    setSent(e.target.value)
  }

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  function handleSubmit(e) {
    e.preventDefault(); // For preventing the form from refreshng after clicking submit
    console.log(sent);

    //Reverse sentence
    var ans = "";
    // console.log("For loop Start");
    // console.log(sent.length);
    // var space = 0;
    // for (let i = sent.length - 1; i >= 0; i--) {
    //   if (sent[i] === ' ' && space === 0) {
    //     space += 1;
    //     ans += sent[i];
    //   }
    //   else if (sent[i] !== ' ') {
    //     space = 0;
    //     ans += sent[i];
    //   }
    //   console.log('Ans', ans);
    // }

    // Reverse Order of words but normal sentence

    var word = ""; // taking for each word
    var space = 0;
    for (let i = 0; i < sent.length; i++) {
      if (sent[i] === ':' || sent[i] === ';' || sent[i] === '.' || sent[i] === ',' || sent[i] === '!') {
        ans += reverseString(word);

        if (ans.charAt(ans.length - 1) === ' ') {
          console.log("Yes we found");
          ans = ans.slice(0, -1);
        }
        ans += sent[i];
        word = "";
        space = 0;
      }
      else if (sent[i] !== ' ') {
        word += sent[i];
        space = 0;
      }
      else if (sent[i] === ' ' && space === 0) {
        ans += reverseString(word);
        ans += " ";
        word = ""; // Now empty the word
        space += 1;
      }
    }
    if (ans.charAt(ans.length - 1) === ' ') {
      console.log("Yes we found");
      ans = ans.slice(0, -1);
    }
    ans += reverseString(word);

    ans = ans.trim();
    console.log(ans.length, ans);
    setShow(ans)
    console.log(show.length, show);
  }
  return (
    <div id='top'>
      <div id='content'>
        <form id='form' onSubmit={handleSubmit}>
          <input id='inp' value={sent} onChange={handleInp} type="text" placeholder='Write here' />
          <button type='submit'>Submit</button>
        </form>
        <div >{show}</div>
      </div>
    </div>
  );
}

export default App;
