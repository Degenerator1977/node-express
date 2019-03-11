import React, {Component} from 'react';
import {Polar} from 'react-chartjs-2';
import ButtonMenu from './ButtonMenu';

class PolarChart extends Component {
  constructor(props){
    super(props);
    this.state = {
        chartData:{
          labels: ["Cars", "Vans", "HGVs"],
          datasets: [{
            label: "Active Assets",
            backgroundColor: ['rgb(123, 153, 255, 0.5)',
                              'rgb(255, 153, 153, 0.5)',
                              'rgb(103, 255, 103, 0.5)'],
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
            <Polar
              data={this.state.chartData}
              width={100}
              height={300}
              options={{
                maintainAspectRatio: false,
                cutoutPercentage: 65,
                // Event onClick lisetner
                'onClick' : function (e, item) {
                  window.alert('clicked polar chart', e);
                },
                title:{
                  display:true,
                  text:'Average Fuel Cost (£)',
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

export default PolarChart;
