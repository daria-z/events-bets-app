import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllCart } from "../../cart/cartSlise";
import EventResult from "./EventResult";

const EventCard = ({ id, name, description, results }) => {
  const cart = useSelector(selectAllCart);
  const isInCart = Boolean(cart.bets.find((bet) => bet.id == id));
  
  return (
    <div
      className={`flex flex-col bg-lightGrey1 rounded-2xl p-3 grow md:w-1/3 ${
        isInCart && "opacity-50"
      }`}
    >
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="mb-4">{description}</p>

      <ul className="flex gap-2 mt-auto">
        {results.map((item) => (
          <EventResult
            key={nanoid()}
            id={id}
            name={name}
            results={item}
            isInCart={isInCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default EventCard;










