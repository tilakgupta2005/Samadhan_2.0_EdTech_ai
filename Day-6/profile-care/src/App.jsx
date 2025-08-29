import React from "react";
import ProfileCard from "./components/ProfileCard";
import devendraImg from "./assets/devendra.jpg"; 

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProfileCard
        name="Devendra Singh"
        roll_no="AI/ML Engineer"
        image={devendraImg}
        description="Passionate about building AI-powered apps and full-stack projects 🚀"
      />
    </div>
  );
}

export default App;
