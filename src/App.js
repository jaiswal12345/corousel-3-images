import React, { useState,useEffect } from 'react';
import './App.css';
 



function App() {
  const slides = [
    {
      name: "Green Apples",
      price: "25$",
      category: "fruits",
      
      image:
        "https://www.itl.cat/pngfile/big/9-97961_wallpaper2you-229553-green-apple-wallpaper-information-security-management.jpg"
    },
    {
      name: "Square Green Apple",
      price: "25$",
      category: "fruits",
      image:
        "https://lh3.googleusercontent.com/proxy/YTDaNgtGuhI0C6fyFPeyTdFjW5lQxJmFwvOulxOAn_R1lNJax_PXn7Bd7m0UxuTlioMOm67HK2PTYQRZVkMqXm6wVqzXoXoNCZcCQ1M5tFKkjZFuPCnj6EIufhKT-bQLnMrf3Czoew"
    },
    {
      name: "Red Apple",
      price: "25$",
      category: "fruits",
      image:
"https://i0.wp.com/post.greatist.com/wp-content/uploads/2020/08/388x210_Are_Apple_Seeds_Poisonous-1.jpg?w=756&h=567"    },
    {
      name: "yellow shirt",
      price: "25$",
      category: "clothes",
      image: "https://images-na.ssl-images-amazon.com/images/I/41XeMU9NbYL.jpg"
    },
    {
      name: "blue shirt",
      price: "25$",
      category: "clothes",
      image:
"data:image/jpeg;base64,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"    },
    {
      name: "pink shirt",
      price: "25$",
      category: "clothes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqWlYbbM-0CV9-GQViqNWqSm-P6uFDZ3lkBQyENQV7tSh9mZ9PH5melsWT845fQaNJLQmNJSJVA&usqp=CAc"
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
  
    return (
      <div
        className="slide"
        data-active={active}
        style={{
          "--offset": offset,
          "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
         transform: active === true ? "scale(1.1)": "none"

        }}
      >
        <div
          className="slideBackground"
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
       <div style={{ marginBottom:"10%"}}>
         <select style={{width:"30%"}} onChange={(e) => setSearchTerm(e.target.value)} >
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
