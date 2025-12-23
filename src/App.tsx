import "./App.css";
import { AccordionDemo } from "./AccordianDemo";

function App() {
  return (
    <>
      <main className="relative flex justify-center items-center w-full h-screen bg-purple-100">
        <div className="absolute top-0 md:bg-[url('public/assets/images/background-pattern-desktop.svg')] bg-[url('public/assets/images/background-pattern-mobile.svg')] bg-cover h-[40%] w-full"></div>
        <div className="flex flex-col max-w-[600px] w-full mx-4 bg-white p-4 rounded-[16px] relative z-10">
          <h1 className="text-6xl font-bold text-purple-950">FAQs</h1>
          <AccordionDemo />
        </div>
      </main>
    </>
  );
}

export default App;
