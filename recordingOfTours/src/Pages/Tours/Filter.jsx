// This component does not work properly. Issues with useEffect
import { useState, useEffect } from "react";

const Filter = ({ tours }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredRegions, setFilteredRegions] = useState(tours);
  console.log('Tours in Filter component:', tours);
  
  let filters = ["Graubünden", "Wallis", "Zentralschweiz", "Tessin"];

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    console.log('useEffect running...');
    filterRegions();
  }, [selectedFilters, tours]);

  const filterRegions = () => {
    if (selectedFilters.length > 0) {
      let tempRegions = selectedFilters.map((selectedCategory) => {
        let temp = tours.filter((region) => region.region === selectedCategory);
        return temp;
      });
      setFilteredRegions(tempRegions.flat());
    } else {
      setFilteredRegions([...tours]);
    }
  };

  return ( 
    <>
      <h2>All your Tours!</h2>
      <div>Here you'll be able to select some filter.</div>
      <div>
        Here will be the filter options
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        Here will be the list of items
        {filteredRegions.map((region, idx) => (
          <div key={`regions-${idx}`} className="item">
            <p>{region.name}</p>
            <p className="category">{region.category}</p>
          </div>
        ))}
      </div>
    </>
   );
}
 
export default Filter;