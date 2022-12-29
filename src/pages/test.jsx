import React, { useRef, useEffect, useState } from "react";

const ITEM_HEIGHT = 50; // height of each list item in pixels
const ITEM_COUNT = 1000; // total number of items in the list
const ITEMS_PER_PAGE = 20; // number of items to display on each page

function InfiniteList() {
  const listRef = useRef(null);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load the first page of items
    setItems(getPage(page));
  }, []);

  useEffect(() => {
    // Set up the IntersectionObserver to load the next page when the user scrolls to the bottom of the list
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Load the next page of items
        setLoading(true);
        setTimeout(() => {
          setPage(page + 1);
          setItems([...items, ...getPage(page + 1)]);
          setLoading(false);
        }, 10000);
      }
    });

    observer.observe(listRef.current);

    return () => observer.disconnect();
  }, [items, page]);

  function getPage(page) {
    // Get the items for the specified page
    return Array(ITEMS_PER_PAGE)
      .fill()
      .map((_, index) => ({
        id: page * ITEMS_PER_PAGE + index,
        value: `Item ${page * ITEMS_PER_PAGE + index}`,
      }));
  }

  return (
    <div ref={listRef} style={{ height: ITEMS_PER_PAGE * ITEM_HEIGHT }}>
      {items.map((item) => (
        <div key={item.id} style={{ height: ITEM_HEIGHT }}>
          {item.value}
        </div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default InfiniteList;
