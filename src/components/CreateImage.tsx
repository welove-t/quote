import React, { LegacyRef, useEffect, useState } from "react";

type props = {
  quote: string;
  container: null | LegacyRef<HTMLImageElement>;
};

const width = 255;
const height = 255;

const CreateImage = ({ quote, container }: props) => {
  return <div className="text-center">create image</div>;
};

export default CreateImage;
