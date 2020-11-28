import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HistoryChart from '../components/HistoryChart'
import CoinData from '../components/CoinData'
import coinGecko from '../apis/coinGecko'
import { css } from '@emotion/core'
import RingLoader from 'react-spinners/RingLoader'

const CoinDetailPage = () => {
  
  const { id } = useParams()
  const [coinData, setCoinData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const override = css`
    display: block;
    margin: 0 auto;
  `

  const formatData = data => {
    return data.map(el => {
      return {
        t: el[0],
        y: el[1].toFixed(2)
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const [ day, week, year, detail ] = await Promise.all([
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: '1'
          }
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: '7'
          }
        }),
        coinGecko.get(`/coins/${id}/market_chart`, {
          params: {
            vs_currency: 'usd',
            days: '365'
          }
        }),
        coinGecko.get('/coins/markets/', {
          params: {
            vs_currency: 'usd',
            ids: id
          }
        })
      ])

      setCoinData({
        day: formatData(day.data.prices), 
        week: formatData(week.data.prices), 
        year: formatData(year.data.prices),
        detail: detail.data[0]
      })
      setIsLoading(false)
    }
    fetchData()
  }, [id])

  const renderData = () => {
    if (isLoading) {
      return <div><RingLoader css={override} color={'#ffffff'} size={150} /></div>
    }
    return (
      <div className="coinlist">
        <HistoryChart data={coinData} />
        <CoinData data={coinData.detail} />
      </div>
    )
  }
  
  return renderData()
}

export default CoinDetailPage