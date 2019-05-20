import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.seeLuso = this.seeLuso.bind(this);
    this.state = {
      lusoz: []
    };
  }

  seeLuso=(event) => {
    event.preventDefault();
    let first = this.refs.fname.value;
    let last = this.refs.lname.value;
    let talent = this.refs.talent.value;
    let date = this.refs.date.value;

    let seeLuso = {
      first,
      last,
      talent,
      date
    };

    let lusoz = this.state.lusoz;

    lusoz.push(seeLuso);
    this.setState({
      lusoz: lusoz
    });
localStorage.setItem( first, JSON.stringify(seeLuso));
return(
document.getElementById("fname").innerHTML= "first name: " + first,
document.getElementById("lname").innerHTML='last name: ' + last,
document.getElementById("dob").innerHTML= "Date of birth: " + date,
document.getElementById("talent").innerHTML= "talent: " + talent);

}
 noLuso=()=>{
  document.getElementById("noel").innerHTML= "";
 }

  
  render() {
    return (
      <div className="App">
        <div>
          <h1>Luso Langa</h1>
        </div>

        <header>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <a>Categories</a>
              <ul>
                <li>
                  <a>Drama</a>
                </li>
                <li>
                  <a>poetry</a>
                </li>
                <li>
                  <a>Photography</a>
                </li>
                <li>
                  <a>painting </a>
                </li>
                <li>
                  <a>Music</a>
                </li>
                <li>
                  <a>Instruments</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About</a>
              <ul>
                <li>
                  <a>Awards</a>
                </li>
                <li>
                  <a>Scholaships</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Overseas Programs</a>
              <ul>
                <li>
                  <a>My Africa On Stage</a>
                </li>
                <li>
                  <a>The emperor's quill</a>
                </li>
                <li>
                  <a> Graffiti Ole Graffiti</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Events</a>
              <ul>
                <li>
                  <a>Pakhonde poetry</a>
                </li>
                <li>
                  <a>Music shows</a>
                </li>
                <li>
                  <a>Night of Strings</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <input type="text" placeholder="Search.." />
                <input type="submit" value="Search" />
              </a>
            </li>
          </ul>
        </header>
        <div className="slider" />
        <div className="luso">
          <p>
            Luso Langa is a non governmental organisation that seeks to help
            Malawian youth master and make the most of their talents.
          </p>
          <p>
            It was formed in 2010 by a group of Malawians talented in things
            like music,painting, poetry, drama. It is founded on the belief that
            a talent is never truly appreciated until it is mastered and
            exposed. The organisation therefore sees to it that all youth who
            value their respective talents are helped forge them for mastery and
            worldwide exposure. As part of motivation, Luso Langa uploads
            exellent work on this page as a way of exposing the youth to world.
          </p>
        </div>

        <br />
        <div className="vimi">
          <h3>VISION</h3>
          <p>To be the center for talent refinement and perfection</p>

          <h4>MISSION</h4>
          <p>
            To nurture malawi's unsung talented youth into fine international
            icons
          </p>
        </div>
        <br />

        <div>
          <form>
            ENTER YOUR PERSONAL DETAILS TO REGISTER
            <br />
            <br />
            <input type="text" ref="fname" placeholder="First name..." /> <br />
            <br />
            <input type="text" ref="lname" placeholder="Last name..." /> <br />
            <br />
            <input
              type="date"
              ref="date"
              name="day"
              placeholder="Date of birth..."
            />{" "}
            <br />
            <br />
            Male
            <input type="radio" name="maleorfemaleorother" value="" /> <br />
            <br />
            Female
            <input type="radio" name="maleorfemaleorother" value="" /> <br />
            <br />
            Other
            <input type="radio" name="maleorfemaleorother" value="" /> <br />
            <br />
            <input type="text" ref="talent" placeholder="Talent..." /> <br />
            <br />
            <button onClick={this.seeLuso}>Submit</button>
          </form>
        </div>
        <button onClick={this.noLuso}>Deregister</button>
        <div id='noel'>
          <p id="fname"></p>
          <p id="lname"></p>
          <p id="dob"></p>
          <p id="talent"></p>
        </div>
      </div>
    );
  }
}

export default App;
