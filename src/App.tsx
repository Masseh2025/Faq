import "./App.css";
import { AccordionDemo } from "./AccordianDemo";

function App() {
  return (
    <>
      <main className="flex justify-center w-full h-screen bg-purple-100">
        <div className="flex flex-col max-w-[600px] w-full mx-4">
          <h1 className="text-6xl font-bold">FAQs</h1>
          <AccordionDemo />
        </div>
      </main>
    </>
  );
}

export default App;
