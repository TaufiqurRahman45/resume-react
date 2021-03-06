import React, { Component } from 'react';
export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (

            <section id="about">
              <div className="row">
                <div className="three columns">
                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>
                     I am a {resumeData.role} .<br />
                      {resumeData.roleDescription}
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <h2>Contact Details</h2>
                      <p className="address">
                        <span>{resumeData.address}
                        </span><br />
                        <span>{resumeData.email}</span><br />
                      </p>
                    </div>
                    <div className="columns download">
                      <p>
                        <a href="https://drive.google.com/file/d/1fi2wwvXM4ka22NSSFOLIotprjwGHdzT1/view?usp=sharing" className="button"><i className="fa fa-download" />Download Resume</a>
                      </p>
                    </div>
                  </div> {/* end row */}
                </div> {/* end .main-col */}
              </div>
            </section>
          );
    }
}