import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const data = window.localStorage.getItem(
      "BANNER_APP",
      JSON.stringify(showBanner)
    );
    if (data !== null) {
      setShowBanner(JSON.parse(data));
    }
  }, [showBanner]);

  return (
    <div className="container">
      <main className="main">
        {showBanner && (
          <div className="signup">
            <div className="signupBody">
              <h2>
                Welcome to <br /> My Coffee Shop!
              </h2>
              <p>Sign up for my newsletter to get the latest update!</p>
            </div>
            <button
              className="signupHide"
              onClick={() => {
                setShowBanner(false);
                window.localStorage.setItem(
                  "BANNER_APP",
                  JSON.stringify(false)
                );
              }}
            >
              Hide
            </button>
          </div>
        )}
        <section>
          <a href="https://github.com/hotreloadjohn">
            <h3>Title 1</h3>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            quos saepe soluta expedita doloremque quod! Nostrum voluptate sed
            sit illum numquam, iusto voluptatem velit ipsa distinctio nesciunt
            dignissimos commodi earum cumque quia ab consequuntur blanditiis
            dolorum, minima, quaerat nulla voluptas!
          </p>
          <a href="https://github.com/hotreloadjohn">
            <h3>Title 2</h3>
          </a>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            facilis fugiat vitae accusamus quae, eum minus sunt corrupti
            ratione! Veniam, rem minima? Ab aut rem quis? Incidunt
            necessitatibus assumenda itaque numquam vel. Facilis tenetur
            perspiciatis ab quis dolorum, ad laborum!
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
