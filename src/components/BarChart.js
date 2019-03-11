import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import ButtonMenu from './ButtonMenu';

class BarChart extends Component {
  constructor(props){
    super(props);

    this.state = {
        chartData:{
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label: "Car",
            stack: 'stack1',
            type: 'bar',
            backgroundColor: 'rgb(123, 153, 255, 0.75)',
            borderColor: 'rgb(123, 153, 255)',
            data: [40, 80, 45, 60, 20, 30, 45, 55, 60, 28, 26, 12],
          },
          {
            label: "HGV",
            stack: 'stack1',
            type: 'bar',
            backgroundColor: 'rgb(255, 153, 153, 0.75)',
            borderColor: 'rgb(255, 153, 153)',
            data: [50, 10, 15, 20, 40, 30, 30, 15, 20, 52, 64, 28],
          },
          {
            label: "Van",
            stack: 'stack1',
            type: 'bar',
            backgroundColor: 'rgb(133, 255, 133, 0.75)',
            borderColor: 'rgb(153, 255, 153)',
            data: [48, 18, 39, 27, 44, 34, 26, 38, 29, 21, 17, 33],
          }]
      }
    }
  }

  componentDidMount() {

    // Use fetch to get API endpoint data

  }

  render(){
    return (
      <div>
        <div className="chart">
          <Bar
            data={this.state.chartData}
            width={100}
            height={300}
            options={{
              maintainAspectRatio: false,
              // Event onClick lisetner
              'onClick' : function (e, item) {
                window.alert('clicked bar chart', e);
              },
              title:{
                display:true,
                text:'Active Assets',
                fontSize:18
              },
              legend:{
                display:true,
                position:'bottom'
              },
              animation: {
                duration: 2000,
                easing: 'linear'
              }
            }}
          />
        </div>

        <div><ButtonMenu /></div>
      </div>
    )
  }
}

export default BarChart;
