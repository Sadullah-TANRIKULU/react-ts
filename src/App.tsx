import { useState, useEffect } from 'react';
import Card from "./components/Card";

export interface info {
  accessibility?: number,
  activity?: string,
  key?: number,
  link?: string,
  participants?: 1,
  price?: number,
  type?: string,
  data?: string[],
  task: string,
  completed: boolean,
  response: any[],
}


function App() {

  const [todos, setTodos] = useState<info[]>([]);

  useEffect(() => {
    pingAPI()
  }, []);

  const pingAPI = async () => {
    // try {

      const res: any = await fetch("https://djangoapi---1-first-try.herokuapp.com/api/todos/")
        // .then(response => console.log(response))
        // .then((data: info) => {
          setTodos([...todos, ...[res]]);
        // })
        // .catch((err) => console.error(err)
        // )
    // } catch (error: string | any) {
    //   console.error(error);

    // }
  };

  // console.log(JSON.parse(''));  // this will cause an 'Uncaught SyntaxError: Unexpected end of JSON input at JSON.parse (<anonymous>)'



  return (
    <div className="App">
      <div onClick={() => pingAPI()} className="button" >Add More Plans</div>
      <div className="cards-container">
        {todos.map((item: info, index: number) => {
          console.log(item);
          
          return <Card key={index} {...item} />
        })}
      </div>
    </div>
  );
}

export default App;
