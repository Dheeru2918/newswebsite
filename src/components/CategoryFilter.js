import React from 'react';

function CategoryFilter({ setCategory }) {
  const categories = ['Business', 'Technology', 'Entertainment'];

  return (
    <div className="category-filter">
      {categories.map(category => (
        <button key={category} onClick={() => setCategory(category.toLowerCase())}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
