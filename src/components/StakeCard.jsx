import React, { useState } from 'react';

export default function StakeCard({ title, coinImg }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className='card main-card-display main-card-display-child'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className='card-head'>
        <h3> {title}</h3>
        <span class='card-content'> title</span>
        <img src={coinImg} alt='coin' />
      </div>
      <div className='card-body'>
        <small className='text-light-1'>APY:</small>
        <small className='text-light-1'>0.00%</small>
        <small className='text-light-1'>START EARING</small>
        {isShown && <>

          <p className='unstaking__text'> 0.1% unstaking fee if withdraw withing 72h</p>
          <p className='bounty'>
            Bounty
            <br />
            0,000.000

          </p>
          <button className=' btn btn-gradient claim__btn'>Claim</button>

        </>}
        <button className='mt-4 btn btn-gradient btn-width stake__now__btn'>
          Stake Now
        </button>
      </div>
      <div className='card-foot'>
        <small className='text-light-1'>APY:</small>
        <small className='text-light-1'>0.00%</small>
      </div>
    </div>
  )
}
