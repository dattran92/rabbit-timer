import { useState, useEffect } from 'react'
import useInterval from '@use-it/interval'

import rabbit from './assets/rabbit.gif'
import carrot from './assets/carrot.jpg'
import './App.css'

function TimePicker({ timer, setTimer }) {
  const [hour, setHour] = useState('00')
  const [minute, setMinute] = useState('30')
  const [second, setSecond] = useState('00')
  return (
    <div className='time-picker'>
      <input type="text" mode="number" onChange={(e) => setHour(e.target.value)} value={hour} />
      <input type="text" mode="number" onChange={(e) => setMinute(e.target.value)} value={minute} />
      <input type="text" mode="number" onChange={(e) => setSecond(e.target.value)} value={second} />
      <button onClick={() => setTimer(`${hour}:${minute}:${second}`)}>SET</button>
    </div>
  )
}

function Timer({ timer, goBack}) {
  const [delay, setDelay] = useState(1000)
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [audio, setAudio] = useState(null)
  
  useEffect(() => {
    const [h,m,s] = timer ? timer.split(':') : [0,0,0]
    const total = (parseInt(h) * 60 * 60) + (parseInt(m) * 60) + parseInt(s)
    setTotal(total)
    setDelay(1000)
    setCount(0)
    setAudio(new Audio('/mario_game_over.mp3'))
  }, [timer])

  useInterval(() => {
    if (total && count < total) {
      setCount((current) => (current || 0) + 1);
    } else {
      if (audio) audio.play();
      setDelay(null)
    }
  }, delay);

  const reset = () => {
    setDelay(1000)
    setCount(0)
  }

  const progressNum = total ? Math.round(count / total * 100) : 0
  const progress = `${progressNum}%` 


  return (
    <div>
      <div className='nav'>
        <button onClick={reset}>RESET</button>
        <button onClick={goBack}>BACK</button>
      </div>
      <div className='timer-container'>
        <div className='rabbit-container'>
          <img 
            src={rabbit} 
            alt='rabbit' 
            className='rabbit' 
            style={{ marginLeft: progress }}
          />
        </div>
        
        <div className='progress'>
          <div className='progress-fill' style={{ width: progress }} />
        </div>
        <div className='carrot-container'>
          {delay && (  
            <img 
              src={carrot}
              className='carrot'
              alt='carrot'
              width='100'
            />
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [timer, setTimer] = useState('');
  const [screen, setScreen] = useState('time-picker')
  
  const submitTimer = (time) => {
    setTimer(time)
    setScreen('timer')
  }

  const goBack = () => setScreen('time-picker')

  return (
    <div className="app">
      {screen === 'time-picker'
        ? <TimePicker timer={timer} setTimer={submitTimer} />
        : <Timer timer={timer} goBack={goBack} />
      } 
    </div>
  );
}

export default App;
