import { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/context';
const Sidebar = () => {

    const [menuExtended, setMenuExtended] = useState(false);
    const {previousPrompts, onSent, setShowResult, loading} = useContext(Context);
  return (
    <div className='sidebar'>
        <div className='top'>
            <img className='menu' onClick={()=>setMenuExtended(!menuExtended)} src={assets.menu_icon} alt="" />
            <div className="new-chat" onClick={
                    ()=>setShowResult(false)
                }>
                <img src={assets.plus_icon} alt="" />
                {menuExtended?<p>New Chat</p>:null}
            </div>
            {menuExtended?<div className="recent">
                <p className="recent-title">Recent</p>
                <div className="previous-prompts">
                {previousPrompts.map((previousPrompt:string, _index:number)=>{
                return <div className="recent-entry" key={_index} 
                    style={{ pointerEvents: loading ? 'none' : 'auto', opacity: loading ? 0.5 : 1 }}
                    onClick={!loading ? ()=>{
                        onSent(previousPrompt);
                    } : undefined}>
                    <img src={assets.message_icon} alt="" />
                    {previousPrompt.length>18?
                    <p>{previousPrompt.slice(0, 18)}...</p>:
                    <p>{previousPrompt.slice(0, 18)}</p>}
                </div>})}
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