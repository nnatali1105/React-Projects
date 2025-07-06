import { ConfigProvider } from 'antd';
import AppButton from './components/AppButton';
import AppQuote from './components/AppQuote';
import { useState, useEffect } from 'react';

export default function App() {
  const [quote, setQuote] = useState('');

  function fetchQuote() {
    fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then(res => setQuote(res));
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      style={{
        width: '40%',
        position: 'absolute',
        top: '50%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        padding: '20px',
        margin: 'auto',
      }}
    >
      <AppQuote author={quote.author} quote={quote.quote} />
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: 'grey',
            },
          },
        }}
      >
        <AppButton onClick={fetchQuote} />
      </ConfigProvider>
    </div>
  );
}
