export const historyOptions = {
  lineHeightAnnotation: {
    always: true,
    hover: false,
    lineWeight: 1.5
  },
  legend: {
    labels: {
      fontColor: 'white',
      fontSize: 14
    }
  },
  showAllToolTips: true,
  tooltips: {
    mode: 'index',
    intersect: false
  },
  events: ['hover'],
  animation: {
    duration: 2000
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'rgba(255, 255, 255, 0.5)'
        },
        type: 'time',
        distribution: 'linear',
        ticks: {
          fontColor: 'white',
          fontWeight: 300
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          color: 'rgba(255, 255, 255, 0.5)'
        },
        ticks: {
          fontColor: 'white'
        }
      }
    ]
  }
}