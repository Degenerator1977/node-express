import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import ButtonMenu from './ButtonMenu';

class PieChart extends Component {
  constructor(props){
    super(props);
    this.state = {
        chartData:{
          labels: ["Cars", "Vans", "HGVs"],
          datasets: [{
            label: "Active Assets",
            backgroundColor: ['rgb(123, 153, 255)',
                              'rgb(255, 153, 153)',
                              'rgb(133, 255, 133)'],
            borderColor: 'rgb(240, 240, 240)',
            data: [10, 45, 55],
          }]
      }
    }
  }

  render(){
    return (
      <div>
          <div className="chart">
            <Pie
              data={this.state.chartData}
              width={100}
              height={300}
              options={{
                maintainAspectRatio: false,
                cutoutPercentage: 60,
                title:{
                  display:true,
                  text:'Average Service Cost (£)',
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

export default PieChart;
