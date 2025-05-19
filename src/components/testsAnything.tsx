import { ReactLenis, useLenis } from "lenis/react";

function App() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root>
      {
        <div>
          <h1>testing lenis</h1>
        </div>
      }
    </ReactLenis>
  );
}

export default App;
