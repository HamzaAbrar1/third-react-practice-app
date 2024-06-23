import React from "react";
import { NavLink } from "react-router-dom";

import { useLoaderData } from "react-router-dom";
export default function AnotherPage() {
  const data=useLoaderData();
  
  console.log(data);
    
  
  
    return (
    <div>
      <div>
        <NavLink to="/">Return to home page</NavLink>
      </div>
    </div>
  );
}

export const fetchProducts = async () => {
    try {
      let val = await fetch("https://fakestoreapi.com/products/2");
      if (!val.ok) {
        throw new Error(`HTTP error! Status: ${val.status}`);
      }
      let result = await val.json();
   return result;
      console.log(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

