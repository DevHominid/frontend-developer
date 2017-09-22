import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import '../horizontalbarchart.css';

class HorizontalBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalBarData: props.horizontalBarData
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }

  render() {
    return (
      <div className='chart'>
        <HorizontalBar
          data={this.state.horizontalBarData}
          height={50}
          options={{
            responsive: true,
            title: {
              display: this.props.displayTitle,
              text: 'Workweek',
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: false,
                  labelString: 'Workweek'
                },
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 80
                }
              }],
              yAxes: [{
                type: 'category',
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Hours'
                },
              }]
            }
          }}
        />
      </div>
    )
  }
};

export default HorizontalBarChart;