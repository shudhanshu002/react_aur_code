#useState
- useState is a React Hook that lets you add state to functional components. Before React Hooks, state could only be used in class components, but useState enables state management in function components.

```js
const [state, setState] = useState(initialValue);
```

```jsx
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable `count` with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

- Initial Value Can Be a Function:

For expensive calculations, you can pass a function to useState to compute the initial value only once:

```jsx
const [count, setCount] = useState(() => computeInitialValue());
```             

# components

```jsx
/* card component */
import React from 'react'

function Card({username="vinod", btnText="visit me",ttn="single"}) {
    console.log(username);


  return (
    <div className="relative h-[400px] w-[300px] rounded-md ">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}-<i>{ttn}</i></h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis? for {username}
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
      {btnText } 
    </button>
  </div>
</div>
  )
}

export default Card
```

```jsx
function App() {

  return (
    <>
      <h1 className='bg-yellow-800 text-black p-4 rounded-xl'>Tailwind css</h1>
      <Card username="Ashwin" btnText='engage me'/>
      <Card username="Navin" btnText='hover me' ttn="married"/>
    </>
  )
}
```


# Link:
- Link is used for basic navigation in React Router.
- It prevents the page from refreshing and changes the URL without a full reload.
- It does not apply any styles automatically


# NavLink:
- NavLink is similar to Link, but it allows you to style the active link based on the current route.
- It applies an active class or inline styles when the link matches the current URL


# What is React Router?
- React Router is a library that enables client-side navigation in React applications. It allows users to move between different pages without a full page reload.

# Creating Routes in React Router
- To define routes, we use react-router-dom. The main tools for route creation are:

1. createBrowserRouter()
2. RouterProvider
3. Route
4. Outlet


# Basic route setup
```js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
```

# Outlet
``` js
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <h1>My Website</h1>
        <nav>
          <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
        </nav>
      </header>

      <main>
        <Outlet /> {/* This renders the child component dynamically */}
      </main>

      <footer>
        <p>© 2025 My Website</p>
      </footer>
    </div>
  );
};

export default Layout;
```

