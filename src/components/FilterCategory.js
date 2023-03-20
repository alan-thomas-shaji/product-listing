import { Button } from "antd";

const FilterCategory = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const clearFilters = () => {
    setSelectedCategory({});
  };

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="m-1 p-1">
      Filter products by category:
      <div className="p-2 m-2">
        {categories?.map((category) => (
          <Button
            key={category?.id}
            className={`rounded-md m-1 ${
              selectedCategory?.id === category?.id ? "bg-blue-500" : ""
            }`}
            onClick={() => filterByCategory(category)}
          >
            {category?.name}
          </Button>
        ))}
        <Button
          className="rounded-md m-1"
          onClick={clearFilters}
          disabled={!selectedCategory?.id}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterCategory;
