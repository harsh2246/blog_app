// import React from 'react';

// const filters = ['Food', 'Travel', 'Technology', 'Art', 'Nature', 'Health'];

// function Filter({ selectedFilters, onFilterToggle }) {
//   return (
//     <div className="filter-container">
//       {filters.map((filter) => (
//         <label key={filter}>
//           <input
//             type="checkbox"
//             checked={selectedFilters.includes(filter)}
//             onChange={() => onFilterToggle(filter)}
//           />
//           {filter}
//         </label>
//       ))}
//     </div>
//   );
// }

// export default Filter;


import React from 'react';
import './Filter.css'; 

const filters = ['Food', 'Travel', 'Tech', 'Art', 'Nature', 'Health'];

function Filter({ selectedFilters, onFilterToggle }) {
  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <label className={`filter-label ${selectedFilters.includes(filter) ? 'selected' : ''}`} key={filter}>
          <input
            type="checkbox"
            checked={selectedFilters.includes(filter)}
            onChange={() => onFilterToggle(filter)}
          />
          {filter}
        </label>
      ))}
    </div>
  );
}

export default Filter;
