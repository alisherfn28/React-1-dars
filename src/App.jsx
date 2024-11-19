import "./App.css";

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
        </div>
      </header>
      <div className="main">
        <div className="container main_coontainer">
          <div className="main_body">
            <div className="body_title">
              <h1>
                Build & manage <br /> distributed teams <br /> like no one else.
              </h1>
            </div>
            <div className="body_experiensed">
              <div className="experinensed_block">
                <div className="experinsed_img"></div>
                <div className="experinsed_title">
                  <div className="top_title">
                    <h3>Experienced Individuals</h3>
                  </div>
                  <div className="bottom_p">
                    <p>
                      Our network is made up of highly experienced professionals
                      <br />
                      who are passionate about what they do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="experinensed_block">
                <div className="experinsed_img"></div>
                <div className="experinsed_title">
                  <div className="top_title">
                    <h3>Experienced Individuals</h3>
                  </div>
                  <div className="bottom_p">
                    <p>
                      Our network is made up of highly experienced professionals
                      <br />
                      who are passionate about what they do.
                    </p>
                  </div>
                </div>
              </div>
              <div className="experinensed_block">
                <div className="experinsed_img"></div>
                <div className="experinsed_title">
                  <div className="top_title">
                    <h3>Experienced Individuals</h3>
                  </div>
                  <div className="bottom_p">
                    <p>
                      Our network is made up of highly experienced professionals
                      <br />
                      who are passionate about what they do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
