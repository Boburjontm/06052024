import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  
  const [yourData, setYourData] = useState([]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = yourData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {currentItems.map((item, index) => (
        <div  key={index}>{item}</div>
      ))}

      <ReactPaginate 
        pageCount={30}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName={'pagination flex items-center justify-center mx-auto gap-2 h-screen'}
        previousClassName={'previous p-1  rounded border-blue-500 border-2 bg-blue-200 text-white active:text-blue-950'}
        nextClassName={'next p-1 rounded border-blue-500 border-2 bg-blue-200 text-white active:text-blue-950 '}
      />
    </div>
  );
};

export default App;
