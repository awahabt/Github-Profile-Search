import { Navbar, Profile, Search } from "./component/index";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="max-w-[1500px]">
          <div className="w-[500px] h-auto px-5 py-4 rounded bor montserrat">
            <Navbar />
            <Search />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
