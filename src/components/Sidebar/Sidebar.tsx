import { useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
const Sidebar = () => {

    const [menuExtended, setMenuExtended] = useState(false);

  return (
    <div className='sidebar'>
        <div className='top'>
            <img className='menu' onClick={()=>setMenuExtended(!menuExtended)} src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {menuExtended?<p>New Chat</p>:null}
            </div>
            {menuExtended?<div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is React ...</p>
                </div>
            </div>:null}
        </div>
        <div className='bottom'>
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {menuExtended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
                {menuExtended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
                {menuExtended?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar