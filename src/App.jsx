import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw] ">
      <section className="bg-black/90 h-[100%] w-[100%] lg:w-[34%] lg:h-[90%] lg:rounded-md">
        <div>
          <Header/>
        </div>
        <div className="mx-[5%]"><TodoForm/></div>
        
      </section>
    </div>
  );
};

export default App;
