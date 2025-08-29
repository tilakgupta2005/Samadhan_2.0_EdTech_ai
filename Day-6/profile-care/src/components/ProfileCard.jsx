import React from "react";

export default function ProfileCard({ name, roll_no, image, description }) {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg p-4 bg-white text-center">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
      />
      <h2 className="text-xl font-bold mt-3">{name}</h2>
      <p className="text-gray-600">{roll_no}</p>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
}


