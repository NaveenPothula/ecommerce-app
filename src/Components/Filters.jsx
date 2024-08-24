// src/components/FiltersComponent.js

import React from "react";
import { useSearchParams } from "react-router-dom";

const FiltersComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilterChange = (filterName, value) => {
    const currentFilters = searchParams.getAll(filterName);
    if (currentFilters.includes(value)) {
      searchParams.delete(filterName);
      const newFilters = currentFilters.filter((filter) => filter !== value);
      newFilters.forEach((filter) => searchParams.append(filterName, filter));
    } else {
      searchParams.append(filterName, value);
    }
    searchParams.delete("search");
    setSearchParams(searchParams);
  };

  return (
    <div className="w-full p-4 border-r border-gray-200 bg-whiteo shadow-md relative">
      {/* RAM Filters */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">RAM</h3>
        <div className="flex flex-col space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="4GB"
              onChange={() => handleFilterChange("ram", "4GB")}
              checked={searchParams.getAll("ram").includes("4GB")}
              className="form-checkbox text-blue-600"
            />
            <span className="ml-2">4 GB</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="6GB"
              onChange={() => handleFilterChange("ram", "6GB")}
              checked={searchParams.getAll("ram").includes("6GB")}
              className="form-checkbox text-blue-600"
            />
            <span className="ml-2">6 GB</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="8GB"
              onChange={() => handleFilterChange("ram", "8GB")}
              checked={searchParams.getAll("ram").includes("8GB")}
              className="form-checkbox text-blue-600"
            />
            <span className="ml-2">8 GB</span>
          </label>
        </div>
      </div>

      {/* ROM Filters */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">ROM</h3>
        <div className="flex flex-col space-y-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="64GB"
              onChange={() => handleFilterChange("rom", "64GB")}
              checked={searchParams.getAll("rom").includes("64GB")}
              className="form-checkbox text-blue-600"
            />
            <span className="ml-2">64 GB</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              value="128GB"
              onChange={() => handleFilterChange("rom", "128GB")}
              checked={searchParams.getAll("rom").includes("128GB")}
              className="form-checkbox text-blue-600"
            />
            <span className="ml-2">128 GB</span>
          </label>
        </div>
      </div>

      {/* Brand Filters */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Brands</h3>
        <div className="flex flex-col space-y-2">
          {["Apple", "Samsung", "RealMe", "Vivo", "Oppo"].map((brand) => (
            <label className="inline-flex items-center" key={brand}>
              <input
                type="checkbox"
                value={brand}
                onChange={() => handleFilterChange("brand", brand)}
                checked={searchParams.getAll("brand").includes(brand)}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* OS Filters */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">OS</h3>
        <div className="flex flex-col space-y-2">
          {["Android", "iOS"].map((os) => (
            <label className="inline-flex items-center" key={os}>
              <input
                type="checkbox"
                value={os}
                onChange={() => handleFilterChange("os", os)}
                checked={searchParams.getAll("os").includes(os)}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2">{os}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Battery Filters */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Battery</h3>
        <div className="flex flex-col space-y-2">
          {["4500mAh", "6000mAh"].map((battery) => (
            <label className="inline-flex items-center" key={battery}>
              <input
                type="checkbox"
                value={battery}
                onChange={() => handleFilterChange("battery", battery)}
                checked={searchParams.getAll("battery").includes(battery)}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2">{battery}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Processor Filters */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Processor</h3>
        <div className="flex flex-col space-y-2">
          {["Mediatek", "Snapdragon"].map((processor) => (
            <label className="inline-flex items-center" key={processor}>
              <input
                type="checkbox"
                value={processor}
                onChange={() => handleFilterChange("processor", processor)}
                checked={searchParams.getAll("processor").includes(processor)}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2">{processor}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Display Filters */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Display</h3>
        <div className="flex flex-col space-y-2">
          {["LED", "LCD"].map((display) => (
            <label className="inline-flex items-center" key={display}>
              <input
                type="checkbox"
                value={display}
                onChange={() => handleFilterChange("display", display)}
                checked={searchParams.getAll("display").includes(display)}
                className="form-checkbox text-blue-600"
              />
              <span className="ml-2">{display}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltersComponent;
