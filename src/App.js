import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Component/LayOut/Main';
import Home from './Component/Home/Home';
import Statics from './Component/Statics/Statics';
import Blog from './Component/Blog/Blog';
import Question from './Component/QuestionPage/Question';
import Background from './Component/Background/Background';

function App() {
  const router =createBrowserRouter([
    {path: '/', element: <Main></Main>,
    children:[
      {path:'/',
      loader: async()=>{
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      element: <Home></Home>},
      {path: '/quize/:id',
      loader: async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
      element: <Question></Question>},
      // {path: '/home', element: <Background></Background>},
      {path: '/', element: <Question></Question>},
      
      {path:'/static', element: <Statics></Statics>},
      {path:'/blog', element: <Blog></Blog>},
      {path: '*', element: <div className='text-danger'>Page not found 404</div>}
    ],
    
    
   },
   
   
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
