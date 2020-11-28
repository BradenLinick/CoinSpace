import React, { useEffect, useState, useContext } from 'react'
import coinGecko from '../apis/coinGecko'
import { WatchListContext } from '../context/watchListContext'
import Coin from './Coin'
import RingLoader from 'react-spinners/RingLoader'
import { css } from '@emotion/core'

const CoinList = () => {
  const [coins, setCoins] = useState([])
  const { watchList, deleteCoin } = useContext(WatchListContext)
  const [isLoading, setIsLoading] = useState(false)

  const override = css`
    display: block;
    margin: 0 auto;
  `
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await coinGecko.get('/coins/markets/', {
        params: {
          vs_currency: 'usd',
          ids: watchList.join(',')
        }
      })
      setCoins(response.data)
      setIsLoading(false)
    }
    if (watchList.length > 0) {
      fetchData()
    } else {
      setCoins([])
    }
  }, [watchList])

  const renderCoins = () => {
    if(isLoading) {
      return <div><RingLoader css={override} color={'#ffffff'} size={150} /></div>
    } else {
      return (
        <ul className="list-group mt-2">
          {coins.map(coin => {
            return (
              <Coin
                key={coin.id}
                coin={coin}
                deleteCoin={deleteCoin}
              />
            )
          })}
        </ul>
      )
    }
  }

  return (
    <div>
      {renderCoins()}
    </div>
  )
}

export default CoinList