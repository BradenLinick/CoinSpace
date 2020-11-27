import React, { useState, useContext } from 'react'
import { WatchListContext } from '../context/watchListContext'
import onClickOutside from 'react-onclickoutside'

function AddCoin() {

  const [toggleDropdown, setToggleDropdown] = useState(false)
  const { addCoin, watchList } = useContext(WatchListContext)
  AddCoin.handleClickOutside = () => setToggleDropdown(false)

  const availableCoins = [
    'bitcoin',
    'ethereum',
    'ripple',
    'tether',
    'bitcoin-cash',
    'litecoin',
    'eos',
    'okb',
    'chainlink',
    'tezos',
    'cardano',
    'stellar'
  ]
 
  const updated = availableCoins.filter(coin => !watchList.includes(coin))

  const handleClick = coin => {
    addCoin(coin)
    setToggleDropdown(false)
  }

  return (
    <div className="dropdown">
      <button 
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className="btn btn-primary dropdown-toggle" 
        type="button"
      >
        Add Coin
      </button>
      <div className={
        toggleDropdown 
        ? 'dropdown-menu show' 
        : 'dropdown-menu'
        }
      >
        {updated.map((el, index) => {
          return (
            <a onClick={() => handleClick(el)} key={index} href="#" className="dropdown-item">{el}</a>
          )
        })}
      </div>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => AddCoin.handleClickOutside
}

export default onClickOutside(AddCoin, clickOutsideConfig)