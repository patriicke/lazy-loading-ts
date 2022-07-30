import axios from "axios";
import React, { useEffect, useState } from "react";
import { IUrl } from "./interface";
const App: React.FC = () => {
  const [url, setUrls] = useState<IUrl[]>([]);
  const fetchImages = async () => {
    const request = await axios.get(
      "https://api.unsplash.com/photos/?client_id=urlARJVsQcnk28YwxFcW9XnviYfx8YKqZtwIk4_9568"
    );
    const response = await request.data;
    setUrls(response);
  };
  useEffect(() => {
    // fetchImages();
  }, []);
  useEffect(() => {
    console.log(url);
  }, [url]);
  return (
    <div className="text-red-300">
      {url.map((data, index) => {
        return <img key={index} src={data.urls.raw} />;
      })}
    </div>
  );
};

export default App;
