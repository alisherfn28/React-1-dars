import "./App.css";
import left_img from "./assets/top_left.png";
import bottom_img from "./assets/bottom_right.svg";
import img11 from "./assets/Group_11.svg";
import img12 from "./assets/Group_12.svg";
import img13 from "./assets/Group_13.svg";
import main_bottom from "./assets/right_main_bottom.png";

function App() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="container nav_container">
            <div className="navigation">
              <div className="nav_menu">
                <div className="menu_logo">
                  <h1>myteam</h1>
                </div>
                <div className="nav_page">
                  <ul className="menu">
                    <li>home</li>
                    <li>about</li>
                  </ul>
                </div>
              </div>
              <div className="nav_button">
                <button>contact us</button>
              </div>
            </div>
          </div>
        </nav>
        <div className="container header_container">
          <img id="img_left" src={left_img} alt="" />
          <div className="header_body">
            <div className="header_title">
              <h1>
                Find the <br /> best <span>talent</span>
              </h1>
            </div>
            <div className="header_paragraf">
              <div className="paragraf_p">
                <p>
                  Finding the right people and building high <br /> performing
                  teams can be hard. Most companies <br /> aren’t tapping into
                  the abundance of global talent. <br /> We’re about to change
                  that.
                </p>
              </div>
            </div>
          </div>
          <img id="img_bottom" src={bottom_img} alt="" />
        </div>
      </header>
      <div className="main">
        <div className="container main_coontainer">
          <div className="body_title">
            <h2>Build & manage distributed teams like no one else.</h2>
          </div>
          <div className="body_experiensed">
            <div className="experinensed_block">
              <div className="experinsed_img">
                <img src={img11} alt="" />
              </div>
              <div className="experinsed_title">
                <div className="top_title">
                  <h3>Experienced Individuals</h3>
                </div>
                <div className="bottom_p">
                  <p>
                    Our network is made up of highly experienced professionals
                    who are passionate about what they do.
                  </p>
                </div>
              </div>
            </div>
            <div className="experinensed_block">
              <div className="experinsed_img">
                <img src={img12} alt="" />
              </div>
              <div className="experinsed_title">
                <div className="top_title">
                  <h3>Easy to Implement</h3>
                </div>
                <div className="bottom_p">
                  <p>
                    Our processes have been refined over years of implementation
                    meaning our teams always deliver.
                  </p>
                </div>
              </div>
            </div>
            <div className="experinensed_block">
              <div className="experinsed_img">
                <img src={img13} alt="" />
              </div>
              <div className="experinsed_title">
                <div className="top_title">
                  <h3>Enhanced Productivity</h3>
                </div>
                <div className="bottom_p">
                  <p>
                    Our customized platform with in-built analytics helps you
                    manage your distributed teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img id="main_bottom" src={main_bottom} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
