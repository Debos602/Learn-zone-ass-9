import React from 'react';

const Blog = () => {
    return (
        <div className='container w-50 text-white'>
           <div className='border rounded my-5'>
           <h2>1.What is the purpose of react router?</h2>
            <p className='fw-bold'> Answer:- React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view.</p>
           </div>
          <div className='border rounded my-5'>
          <h2>2.how does context api work?</h2>
            <p className='fw-bold'>Answer: The Context API helps share data between components which you can't easily share with props, for example, complex data objects. React Context API provides a way to send data like userid, auth, and theme data through the component tree without sending any props manually at every level.</p>
          </div>
            <div className='border rounded my-5'>
            <h2>3.What is usehref?</h2>
            <p className='fw-bold'>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the component in react-router-dom to see how it uses useHref internally to determine its own href value.</p>
            </div>
        </div>
    );
};

export default Blog;