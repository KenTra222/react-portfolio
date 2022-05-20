import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Kentravious Colson</h2>
            <h4 style={{color: 'grey'}}>web developer & 3d animator</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Byron, GA</h5>
            <p></p>
            <h5>Phone</h5>
            <p>(478) 744-3006</p>
            <h5>Email</h5>
            <p>Kentraviousc@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2022}
              schoolName="Scrimba"
              schoolDescription="An interactive online course that teaches through project based learning. Students can interact with the code right on the video"
               />

               <Education
                 startYear={2022}
                 endYear={2022}
                 schoolName="EDX.org"
                 schoolDescription="online educational platform to learn trades of multiple industries."                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2022}
              endYear={2022}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                />
                <Skills
                  skill="HTML/CSS"
                  />
                  <Skills
                    skill="NodeJS"
                    />
                    <Skills
                      skill="React"
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
