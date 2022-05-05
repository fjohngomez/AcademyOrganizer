import React, { useState } from 'react';

const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit}) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage(){
    setCurrentPage((page) => page + 1)
  }

  function goToPreviousPage(){
    setCurrentPage((page) => page - 1)
  }

  function changePage(e){
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex)
  }

  const getPaginatedGroup = () => {
    let start = Math.floor((currentPage -1 )/ pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx)=> start + idx + 1);
  }
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>
      <div>
        <button onClick={goToPreviousPage}>
          Prev
        </button>
        {getPaginatedGroup().map((item, index)=> (
          <button
          key={index}
          onClick={changePage}>
            {item}
          </button>
        ))}
        <button
        onClick={goToNextPage}>
          Next
        </button>
      </div>
    </div>
  )

}

export default Pagination;
