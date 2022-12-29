// import React from "react";
// import { redirect, useNavigate } from "react-router-dom";

// const home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <nav>
//         <button
//           onClick={() => {
//             localStorage.removeItem("user");
//             navigate("/login");
//           }}
//         >
//           LogOut
//         </button>
//       </nav>
//     </div>
//   );
// };

// export default home;

import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Card from "../components/Card";
import Layout from "../components/Layout";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

const test2 = () => {
  const [fetchedData, setFetchedData] = useState({ results: [] });
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://randomuser.me/api/?results=2&page=${page}`
      );

      setFetchedData((prevData) => {
        if (!prevData) return { results: response.data.results };
        return {
          results: [...prevData.results, ...response.data.results],
        };
      });
    };
    page == 1
      ? getData()
      : setTimeout(() => {
          getData();
        }, 1000);
  }, [page]);
  const fetchMoreData = () => {
    if (fetchedData.results.length >= 500) {
      setHasMore(false);
      return;
    }

    setPage((prevPage) => prevPage + 1);
  };
  console.log(page);
  if (!fetchedData) return <p>Loading...</p>;

  return (
    <Layout>
      <InfiniteScroll
        dataLength={fetchedData.results.length}
        next={fetchMoreData}
        style={{ display: "flex", flexDirection: "column" }}
        hasMore={hasMore}
        loader={<h4 className="text-center text-neutral-50">Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {fetchedData.results.map((result) => {
          return (
            <div className="m-2">
              <Card result={result} />
            </div>
          );
        })}
      </InfiniteScroll>
    </Layout>
  );
};

export default test2;
