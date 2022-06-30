import React from "react";

type props = {
  children: React.ReactNode;
};

export const Labels = ({ children }: props) => {
  return (
    <p className="mb-2 text-lg font-extralight tracking-wider text-gray-500 dark:text-gray-100">
      {children}
    </p>
  );
};
