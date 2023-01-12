import { useEffect, useState } from "react";
import categoryData from "api/categories.json";
import Category from "components/ui/Category";
export default function Categories() {
  const [categories, setCateories] = useState([]);
  useEffect(() => 
  setCateories(categoryData)
  , []);
  return (
    <div className="bg-white py-4">
      <div className="container  mx-auto">
        <h3 className="text-sm font-semibold mb-3">Kategoriler</h3>
        <div className="grid grid-cols-10">
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
