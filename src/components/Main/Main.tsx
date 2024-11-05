import { assets } from '../../assets/assets'
import './Main.css'
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
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
      </div>
      <div className="main-bottom">
        <div className="search-box">
          <input type="text" placeholder='Enter a prompt here'/>
          <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            <img src={assets.send_icon} alt="" />
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