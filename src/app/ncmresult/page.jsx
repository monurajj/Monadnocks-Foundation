"use client";
import React, { useState, useEffect } from "react";
import resultsData from "../../../src/ncm2025resultdata.json";

const NCMResultPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    setFilteredResults(Object.values(resultsData).flat());
  }, []);

  const filterResults = (query, category) => {
    const allResults = Object.entries(resultsData)
      .filter(([key]) => category === "all" || key === category)
      .flatMap(([, data]) => data);

    return allResults.filter(
      (result) =>
        result.name.toLowerCase().includes(query) ||
        result.guardianName.toLowerCase().includes(query)
    );
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredResults(filterResults(query, selectedCategory));
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    setFilteredResults(filterResults(searchQuery, category));
  };

  const getRankColor = (rank) => {
    if (selectedCategory === "all") return "bg-white";
    if (rank === 1) return "bg-yellow-400 text-white";
    if (rank === 2) return "bg-gray-400 text-white";
    if (rank === 3) return "bg-orange-500 text-white";
    if (rank >= 4 && rank <= 10) return "bg-blue-200";
    return "bg-white";
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-gray-100 font-poppins">
      {/* Page Title */}
      <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 font-inter mb-6 sm:mb-8">
        🏆 NCM Championship 2025 Results 🏆
      </h1>

      {/* Search Bar */}
      <div className="mb-4 sm:mb-6 flex justify-center px-2">
        <input
          type="text"
          placeholder="🔍 Search by Name or Guardian Name"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full sm:max-w-lg p-2 sm:p-3 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 font-inter">
        {["all", "ninja", "challengers", "masters"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryFilter(category)}
            className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-medium rounded-full shadow-md transition-all duration-300 ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Results Table (Responsive) */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-2 sm:p-4">
        <table className="min-w-full border border-gray-200 text-sm sm:text-base">
          {/* Table Head */}
          <thead className="bg-blue-600 text-white font-inter">
            <tr>
              {selectedCategory !== "all" && (
                <th className="px-4 sm:px-6 py-2 sm:py-3 text-left font-semibold">
                  Rank
                </th>
              )}
              {["Name", "Phone", "Village", "Guardian", "Marks"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-4 sm:px-6 py-2 sm:py-3 text-left font-semibold"
                  >
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-800">
            {filteredResults.map((result, index) => {
              const rank = index + 1;
              return (
                <tr
                  key={index}
                  className={`border-b ${
                    selectedCategory !== "all" ? getRankColor(rank) : "bg-white"
                  } hover:bg-gray-100 transition-all`}
                >
                  {selectedCategory !== "all" && (
                    <td className="px-4 sm:px-6 py-2 sm:py-4 font-bold text-blue-900">
                      #{rank}
                    </td>
                  )}
                  <td className="px-4 sm:px-6 py-2 sm:py-4">{result.name}</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    ********{result.phone.slice(-2)}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    {result.village}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4">
                    {result.guardianName || "N/A"}
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-4 font-bold">
                    {result.marks}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* No Results Message */}
      {filteredResults.length === 0 && (
        <p className="text-center text-gray-600 mt-4 sm:mt-6 text-sm sm:text-lg">
          ❌ No results found for "
          <span className="text-red-500">{searchQuery}</span>" in{" "}
          <span className="font-semibold">{selectedCategory}</span>.
        </p>
      )}
    </div>
  );
};

export default NCMResultPage;
