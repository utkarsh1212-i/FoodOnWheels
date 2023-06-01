"use client";
import SearchBar from "@/components/SearchBar";
import TruckCards from "@/components/TruckCards";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full h-full flex-col flex-center mt-4 gap-6">
      <div>
        <h1 className="head_text text-center">
          Experience Flavors
          <br />
          <span className="orange_gradient text-center">with FoodWheels!!!</span>
        </h1>
        <p className="desc text-center">
          Truck Tracker: Hunt Down the Best Bites! Discover, Devour, and Delight
          in Food Truck Finds!
        </p>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center my-4">Our Centers</h2>
        <TruckCards />
      </div>
    </section>
  );
}
