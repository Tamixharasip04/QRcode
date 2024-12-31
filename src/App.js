import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [img, setImg] = useState('');

  function generateQR(e) {
    e.preventDefault();
    if (text.length > 0) {
      setImg(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`);
    } else {
      const inputField = document.querySelector('input');
      inputField.classList.add('error');
      setTimeout(() => {
        inputField.classList.remove('error');
      }, 1000);
    }
  }

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={generateQR}>
          <label>Enter your text here</label>
          <input
            type="text"
            placeholder="Text or URL"
            value={text}
            onChange={(e) => setText(e.target.value)}></input>
          <div className={`imgbox ${img ? 'show-img' : ''}`}>
            {img && <img src={img} alt="QR Code"/>}
          </div>
          <button type="submit">Generate QR Code</button>
        </form>
      </div>
    </div>
  );
}

export default App;
