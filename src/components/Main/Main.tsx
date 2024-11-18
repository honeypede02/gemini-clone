import { useContext, useEffect} from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/context'

const Main = () => {
  const {onSent,recentPrompt,showResult, loading,resultData, input, setInput, isError} = useContext(Context);
  async function sendPrompt() {
    await onSent(input);
  }

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      {!showResult?
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Dev.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest some good phrases</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Write a code for me to add numbers</p>
            <img src={assets.code_icon} alt="" />
          </div>
          <div className="card">
            <p>Write a lullaby for me</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Brainstrom some team bonding activvities</p>
            <img src={assets.message_icon} alt="" />
          </div>
        </div>
      </div>:<div className='result-container'>
        <div className="prompt-top">
        <img src={assets.user_icon} alt="" />
        <p className="recent-prompt">{recentPrompt}</p>
        </div>
        <div className="prompt-main">
          <img src={assets.gemini_icon} alt="" />
          {isError?
          <p className='error'>Server is currently busy</p>:null}
          {loading?
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>:
            <p dangerouslySetInnerHTML={{__html:resultData}}></p> 
          }
        </div>
      </div>}
      <div className="main-bottom">
        <div className="search-box">
          <input type="text" placeholder='Enter a prompt here'
          value={input}
           onChange={(event)=>setInput(event.target.value)}
           onKeyDown={(e)=> 
            {if(e.key === "Enter"){
              sendPrompt()
            }} }/>
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img 
              src={assets.send_icon} 
              alt=""
              onClick={() => sendPrompt()} />
          </div>
        </div>
        <p className="bottom-info">
          Gemini may display inaccurate info, including about people, double check the information
        </p>
      </div>
    </div>
  )
}

export default Main