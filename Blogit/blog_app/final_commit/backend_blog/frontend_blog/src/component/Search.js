// import React, { useState, useEffect } from 'react';
// import Filter from './Filter'; // Import the Filter component
// import SearchResult from './SearchResult'; // Import the SearchResult component

// function Search() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [results, setResults] = useState([]);

//   // Fetch results when search term changes
//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setResults([]);
//       return;
//     }

//     // Perform shallow search here and set results
//     // You should make an API call to your backend to fetch the results
//     // Example: fetchResultsFromDatabase(searchTerm, selectedFilters)
//     // setResults(apiResponse);
//   }, [searchTerm, selectedFilters]);

//   // Fetch results when search button is clicked
//   const handleSearchClick = () => {
//     // Perform thorough search here and set results
//     // Similar to the shallow search, make an API call to fetch results
//     // Example: fetchResultsFromDatabase(searchTerm, selectedFilters, thorough=true)
//     // setResults(apiResponse);
//   };

//   const handleFilterToggle = (filter) => {
//     setSelectedFilters((prevFilters) =>
//       prevFilters.includes(filter)
//         ? prevFilters.filter((item) => item !== filter)
//         : [...prevFilters, filter]
//     );
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearchClick}>Search</button>
//       </div>
//       <Filter selectedFilters={selectedFilters} onFilterToggle={handleFilterToggle} />
//       <SearchResult results={results} />
//     </div>
//   );
// }

// export default Search;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Search.css'; // Import your Search.css or any other CSS file you're using

// function Search() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [results, setResults] = useState([]);
//   const [showFilters, setShowFilters] = useState(false); // State for toggling filters

//   const [data, setData] = useState([]);
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setResults([]);
//       return;
//     }

//     axios
//       .get(`/api/search?keyword=${searchTerm}&filters=${selectedFilters.join(',')}`)
//       .then((response) => {
//         setResults(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching search results:', error);
//       });
//   }, [searchTerm, selectedFilters]);

//   const toggleFilters = () => {
//     setShowFilters(!showFilters);
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={toggleFilters}>Toggle Filters</button>
//       </div>
//       <div className={`filter-container ${showFilters ? 'open' : ''}`}>
//         {/* Your filter components go here */}
//       </div>
//       {/* Rest of your component code */}
//     </div>
//   );
// }

// export default Search;



// Working Code

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Search.css'; 

// function Search() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [results, setResults] = useState([]);
//   const [showFilters, setShowFilters] = useState(false);

//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setResults([]);
//       return;
//     }

//     axios
//       .get(`http://localhost:5000/mangal/filtered-blogs?checkboxes=${selectedFilters.join(',')}search=${searchTerm}`)
//       .then((response) => {
//         setResults(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching search results:', error);
//       });
//   }, [searchTerm, selectedFilters]);

//   const toggleFilters = () => {
//     setShowFilters(!showFilters);
//   };

//   return (
//     <div className="search-page">
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={toggleFilters}>Toggle Filters</button>
//       </div>
//       <div className={`filter-container ${showFilters ? 'open' : ''}`}>
//         {/* filter components here */}
//       </div>
//       {/* Rest of the component here */}
//     </div>
//   );
// }

// export default Search;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';
import Filter from './Filter'; // Import the Filter component
import SearchResult from './SearchResult'; // Import the SearchResult component

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [results, setResults] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    const fetchFilteredBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/mangal/filtered-blogs', {
          params: {
            search: searchTerm,
            checkboxes: selectedFilters,
          },
        });
        setResults(response.data.blogs);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    fetchFilteredBlogs();
  }, [searchTerm, selectedFilters]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={toggleFilters}>Toggle Filters</button>
      </div>
      <div className={`filter-container ${showFilters ? 'open' : ''}`}>
        <Filter selectedFilters={selectedFilters} onFilterToggle={(filter) => setSelectedFilters((prevFilters) =>
          prevFilters.includes(filter)
            ? prevFilters.filter((item) => item !== filter)
            : [...prevFilters, filter]
        )} />
      </div>
      <SearchResult results={results} />
    </div>
  );
}

export default Search;

