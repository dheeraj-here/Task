import './App.css';
import { useState } from 'react';

function App() {
  const [sent, setSent] = useState(''); // For input purpose
  const [show, setShow] = useState(''); // For showing the result sentence

  function handleInp(e) {
    setSent(e.target.value)
  }

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  function handleSubmit(e) {
    e.preventDefault(); // For preventing the form from refreshng after submitting form
    console.log(sent);
    var ans = "";


    var word = ""; // taking for each word
    var space = 0;
    for (let i = sent.length-1; i >= 0; i--) {
      if(sent[i] === '.' || sent[i] === ',' || sent[i] === '?' || sent[i] === '!' || sent[i] === "'" || sent[i] === '-' || sent[i] === '_' || sent[i] === ';' || sent[i] === ':'){
        ans+= reverseString(word);
        ans+=sent[i];
        word = "";
      }
      else if(sent[i] !== ' '){
        word += sent[i];
        space = 0;
      }
      else{
        ans += reverseString(word);
        if(space === 0){
          ans+= ' ';
          space+=1;
        }
        word = ""
      }
     
    }

    // Now check if any word is remaining after completion of loop
    ans+=reverseString(word)


    ans = ans.trim(); // removing leading and trailing spaces from sentece
    setShow(ans); 
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
