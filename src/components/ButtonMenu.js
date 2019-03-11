import React, {Component} from 'react';

class ButtonMenu extends Component{

    render(){
          return(
            <div className='row'>
              <div className="col-md-6">
                  <button className="btn btn-success btn-sm mt-2 float-right" type="button" id="updateButton">Update</button>
              </div>
              <div className="col-md-6">
                  <button className="btn btn-danger btn-sm mt-2 float-left" type="button" id="updateButton">Reset</button>
              </div>
            </div>
          );
        }
}

export default ButtonMenu;
