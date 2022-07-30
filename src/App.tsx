import React, { useEffect, useState } from "react";
import { IUrl } from "./interface";
import data from "./logs/data.json";

const dt = React.lazy((): IUrl[] => import("./logs/data.json"));

const App: React.FC = () => {
  const [url, setUrls] = useState<IUrl[]>([]);
  useEffect(() => {
    setUrls(data);
  }, [url]);
  return (
    <div className="flex items-center justify-center py-3 flex-col space-y-3">
      {url.map((data, index) => {
        return (
          <div key={index}>
            <h1 className="h-14 flex items-center bg-gray-100">
              {data.post.name}
            </h1>
            <img
              src={data.post.url}
              className="w-[40em] h-[50em] "
              loading="lazy"
            />
            <p className="h-14 flex items-center bg-gray-100">
              {data.post.message}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
