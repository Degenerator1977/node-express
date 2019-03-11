import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import ButtonMenu from './ButtonMenu';

class LineChart extends Component {

  constructor(props){
    super(props);
    this.state = {
        chartData:{
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label: "Car",
            type: 'line',
            data: [2237, 2765, 2890, 3200, 2900, 3100, 4000, 4200, 3670, 3500, 2430, 2030],
            backgroundColor: 'rgb(123, 153, 255, 0.1)',
            borderColor: 'rgb(123, 153, 255)'
        },
        {
          label: "HGV",
          type: 'line',
          backgroundColor: 'rgb(255, 153, 153, 0.1)',
          borderColor: 'rgb(255, 153, 153)',
          data: [8000, 8760, 9200, 9100, 10230, 11200, 9976, 9023, 9800, 10230, 8320, 7642],
        },
        {
          label: "Van",
          type: 'line',
          backgroundColor: 'rgb(103, 255, 103, 0.1)',
          borderColor: 'rgb(103, 255, 103)',
          data: [4590, 5620, 5760, 6765, 7010, 7600, 8320, 7699, 5670, 6543, 5432, 4322],
        }]
      }
    }
  }

  render(){
    return (
      <div>
          <div className="chart">
            <Line
              data={this.state.chartData}
              width={100}
              height={300}
              options={{
                maintainAspectRatio: false,
                title:{
                  display:true,
                  text:'Distance Travelled (Km)',
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

export default LineChart;
