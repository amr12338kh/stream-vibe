import React from "react";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
};

export default loading;
