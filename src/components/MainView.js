import React, {Component} from 'react';
import BarChart from './BarChart';
import BubbleChart from './BubbleChart';
import PolarChart from './PolarAreaChart';
import ScatterChart from './ScatterChart';

class DashboardView extends Component {

    render(){
        return(
            <div>
              <div className = "row">
                <div className="col-md-12"><BarChart /></div>
              </div>

              <div className = "row">
                <div className="col-md-4"><BubbleChart /></div>
                <div className="col-md-4"><ScatterChart /></div>
                <div className="col-md-4"><PolarChart /></div>
              </div>
            </div>
        );
    }
}

export default DashboardView;
