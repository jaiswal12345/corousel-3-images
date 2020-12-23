import React, { useState,useEffect } from 'react';
import './App.css';
 



function App() {
  const slides = [
    {
      name: "Oranges",
      price: "25$",
      category: "food",
      
      image:
        "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      name: "Apples",
      price: "25$",
      category: "food",
      image:
        "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      name: "shirt",
      price: "25$",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      name: "shirt 1",
      price: "25$",
      category: "clothes",
      image:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      name: "shirt 2",
      price: "25$",
      category: "clothes",
      image:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  ];
  

  const [data, setData] = useState(() => { return slides }); 
  const [searchTerm, setSearchTerm] = useState('');

  function useTilt(active) {
    const ref = React.useRef(null);
    return ref;
  }
  
  const initialState = {
    slideIndex: 0
  };
  
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % data.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? data.length - 1 : state.slideIndex - 1
      };
    }
  };
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  
  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      <div
        ref={ref}
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
        }}
      >
        <div
          className="slideBackground"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        />
        <div
          className="slideContent"
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.name}</h2>
            <h3 className="slideSubtitle">{slide.price}</h3>
            <p className="slideDescription">{slide.category}</p>
          </div>
        </div>
      </div>
    );
  }



  useEffect(() => {
    if ( searchTerm === 'All' || searchTerm === '') {
       setData(slides);
     }else{
       const newData = slides.filter(product => {
         if (product.category === searchTerm) return product;
       });
        setData(newData)
     }
     
   }, [searchTerm])
  
  const categories = slides.map((product) => {
    return product.category;
  });
  const dropdown = ['All',...new Set(categories)];

   return (
     <>
       <div>
         <select onChange={(e) => setSearchTerm(e.target.value)}>
           { dropdown.map((category,i) => {
             return <option key={ i} value={category}>{ category}</option>
           })}
         </select>
       </div>
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...data, ...data, ...data].map((slide, i) => {
        let offset = data.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
       </div>
       </>
  );
}

export default App;
