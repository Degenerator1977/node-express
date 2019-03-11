import React, {Component} from 'react';
import {Scatter} from 'react-chartjs-2';
import ButtonMenu from './ButtonMenu';

class ScatterChart extends Component {

  constructor(props){
    super(props);
    this.state = {
        chartData:{
          datasets: [{
            label: "Car",
            backgroundColor: 'rgb(123, 153, 255)',
            borderColor: 'rgb(123, 153, 255)',
            data: [
              {
                x:40, y: 3000
              },
              {
                x:80, y: 2500
              },
              {
                x:45, y: 2600
              },
              {
                x:60, y: 3210
              },
              {
                x:20, y: 4000
              },
              {
                x:30, y: 3000
              }],
          },
          {
            label: "HGV",
            backgroundColor: 'rgb(255, 153, 153)',
            borderColor: 'rgb(255, 153, 153)',
            data: [
              {
                x:50, y: 6200
              },
              {
                x:10, y: 5300
              },
              {
                x:15, y: 5950
              },
              {
                x:20, y: 6250
              },
              {
                x:40, y: 7000
              },
              {
                x:30, y: 5623
              }],
        },
        {
          label: "Van",
          backgroundColor: 'rgb(103, 255, 103)',
          borderColor: 'rgb(103, 255, 103)',
          data: [
            {
              x:48, y: 5700
            },
            {
              x:18, y: 3570
            },
            {
              x:39, y: 5430
            },
            {
              x:27, y: 4300
            },
            {
              x:44, y: 5210
            },
            {
              x:34, y: 4760
            }],
      }]
      }
    }
  }

  render(){
    return (
      <div>
          <div className="chart">
            <Scatter
              data={this.state.chartData}
              width={100}
              height={300}
              options={{
                maintainAspectRatio: false,
                title:{
                  display:true,
                  text:'No. Assets / Distance Travelled (Km)',
                  fontSize:18
                },
                legend:{
                  display:true,
                  position:'bottom'
                },
              }}
            />
          </div>
          <div><ButtonMenu /></div>
    </div>
    )
  }
}

export default ScatterChart;
