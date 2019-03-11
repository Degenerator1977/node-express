import React, {Component} from 'react';
import {Bubble} from 'react-chartjs-2';
import ButtonMenu from './ButtonMenu.js';

class BubbleChart extends Component {
  constructor(props){
    super(props);
    this.state = {
        chartData:{
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label: "Active Assets",
            backgroundColor: ['rgb(255, 153, 153)',
                              'rgb(123, 153, 255)',
                              'rgb(255, 153, 153)',
                              'rgb(123, 153, 255)',
                              'rgb(255, 153, 153)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [
              {
                x:4, y: 100, r: 25
              },
              {
                x:50, y: 22, r: 9
              },
              {
                x:31, y: 70, r: 50
              },
              {
                x:70, y: 70, r: 45
              },
              {
                x:92, y: 45, r: 15
              }
          ],
          }]
      }
    }
  }

  render(){
    return (
      <div>
          <div className="chart">
            <Bubble
              data={this.state.chartData}
              width={100}
              height={300}
              options={{
                maintainAspectRatio: false,
                title:{
                  display:true,
                  text:'Active Assets',
                  fontSize:18
                },
                legend:{
                  display:true,
                  position:'bottom'
                }
              }}
            />
          </div>

          <div><ButtonMenu /></div>
      </div>
    )
  }
}

export default BubbleChart;
