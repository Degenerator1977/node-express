import React, {Component} from 'react';
import Transport from './images/transport.jpg';
import Terramar from './images/Terramar.jpg';
import axios from 'axios';
import AlertDialog from './components/AlertDialog';

class Login extends Component{

    constructor(props) {
        super(props);

        this.initialState = {
            username: '',
            password: '',
            company: '',
        };

        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        const {username, password, company} = this.state;

        // Check if all fields are filled out
        if((!username) || (!password) || (!company)) {
            window.alert("Missing login details!")
          } else {

            // Post form values to API endpoint
            //axios.post(`http://admin.terramarnetworks.com/api/login`, {username, password, company})
            axios({
                url: `http://richard2.terramarnetworks.com/interfaces/web/api/login.php`,
                method: 'POST',
                data:  JSON.stringify({
                  username: username,
                  password: password,
                  company: company
                })
            })
            .then( (res) => {
                // Check if reponse data contains authenticated value TRUE
                if(res.data['token']) {
                  // Set token to local storage
                  this.setToken(res.data['token']);
                  this.loggedIn = true;

                  window.alert("Login Success");
                  window.location = "http://dashboard.terramarnetworks.com/home";
                } else {
                  window.alert(res.data['Message']);
                }
              })
              .catch(function (err) {
                  window.alert(err);
                });
            }
    }

    setToken(token) {
      localStorage.setItem('token', token)
    }

    getToken(token) {
      return localStorage.getItem('token')
    }

    logout() {
      localStorage.removeItem('token')
    }

    handleChange(event){
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    render(){
        return(

          <div className="container-fluid">

              <div className = "row">
                  <div className="col-md-4">
                      <nav className="navbar nav-bar-default">
                          <div className="navbar-header">
                              <a className="navbar-brand float-left" href="http://dashboard.TerraMar.com/"><img src={Terramar} /></a>
                          </div>
                      </nav>
                  </div>
              </div>

              <div className="row">
                <div className="col-md-2"></div>
                    <div className="col-sm-6"><img src={Transport} className="img-fluid"/></div>

                          <div className="col-md-3">
                            <div className="container-fluid">
                                <div className="sidenav">
                                    <div className="login-main-text">
                                        <h2>Access Portal</h2>
                                            <p>Login here to access TerraMar Networks systems.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="login-form">
                                <form className="form-signin">
                                    <div className="form-group">
                                       <label>User Name</label>
                                          <input type="text" className="form-control" name="username" placeholder=""
                                            value={this.state.username} onChange={this.handleChange} required></input>
                                  </div>

                                  <div className="form-group">
                                     <label>Password</label>
                                        <input type="password" className="form-control" name="password" placeholder=""
                                          value={this.state.password} onChange={this.handleChange} required></input>
                                  </div>

                                  <div className="form-group">
                                     <label>Company</label>
                                        <input type="text" className="form-control" name="company" placeholder=""
                                          value={this.state.company} onChange={this.handleChange} required></input>
                                  </div>

                                  <button type="submit" value="submit" className="btn btn-outline-primary float-right"
                                      onClick={this.submitForm}>Login</button>
                                </form>
                          </div>
                          <AlertDialog />
                      </div>
                </div>

            </div>
        );
    }
}

export default Login;
