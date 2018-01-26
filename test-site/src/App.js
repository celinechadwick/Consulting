import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <div className="nav" style={{'background-image':"url('https://images.unsplash.com/photo-1500004621732-74cd4ad4d53e?ixlib=rb-0.3.5&s=f272dea50157a0cc05fa8656f726de82&auto=format&fit=crop&w=1350&q=80')"}}>
          <img src="./assets/cardlogo1.png" className="logo"/>
      </div>
        <div className="banner">
            <p className="white-text-p">
            <h1 className="about-h1">ABOUT US</h1>
              Rascon Associates LLC advises private, not-for-profit and government agencies across
              the country on building and administering entrepreneurial and employment training
              programs
            </p>
        </div>

        <div className="container">
            <div className="topic-col-12">
              <h1 className="body-h1">AREAS OF PRACTICE</h1>
            </div>
        </div>

        <div className="col-4-container">
          <div className="row">
            <div className="col-4">
              <img src="./assets/workforce1.png" className="image"/>
                <h2> WORKFORCE DEVELOPMENT </h2>
                <ul>
                  <li>Strategic planning and product management</li>
                  <li>Design and governance</li>
                  <li>Program grant and management systems</li>
                  <li>Service delivery</li>
                  <li>Performance accountability</li>
                  <li>WIOA policy and program compliance and implementation</li>
                </ul>
            </div>

            <div className="col-4">
              <img src="./assets/construction.png" className="image" alt="construction"/>
                <h2>CONSTRUCTION INDUSTRY SERVICES</h2>
                <ul>
                  <li>Curriculum development and program design</li>
                  <li>Workforce and contractor diversity consulting (DBE, MBE, SBE, WBE)</li>
                </ul>
            </div>

            <div className="col-4">
              <img src="./assets/gov.png" className="image" alt="contracting"/>
                <h2>GOVERNMENT CONTRACTING SERVICES</h2>
                <ul>
                  <li>Navigation of government procurement markets for prime and subcontractors, including diverse businesses</li>
                  <li>Contract acquisition, maintenance, and compliance</li>
                </ul>
            </div>
          </div>
        </div>

          <div className="container-2">
          <div className="topic-col-12">
          <img src="./assets/workforce2.png" className="workforce2"/>
            <h1 className="body-h1">Workforce Development</h1>
              <p className="workforce-p">
                We take a local and regional approach to help workforce development organizations build an
                exceptional workforce and talent pipeline through targeted education, training and employment
                support services. We understand how to respond to the changing demand for skills and how to
                align employers, workers, and labor market systems to maximize program results.
              </p>
          </div>
          </div>

      <div className="lets-chat">
      </div>
      </div>
    );
  }
}

export default App;
