import React from 'react'
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
  return (
    <div className='Notifications'>
        <p>Here is a list of notifications</p>
        <button>
          style={{ position: 'absolute', top: '7px', right: '7px', background: 'none', cursor: 'pointer'}}
				  aria-label='Close'
				  onClick={console.log('Close button has been clicked')}
				  <img style={{ display: 'inline', marginTop: '5px', marginRight: '5px'}} src={closeIcon} alt='Close' width="15px"/>
        </button>
        <p>Here is the list of notifications</p>
          <ul>
            <li data="default">New course available</li>
            <li data="urgent">New resume available</li>
            <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}}></li>
          </ul>
    </div>
  )
}

export default Notifications