import React, { useEffect, useState } from "react";

const Github = () => {
  const [contributionsData, setContributionsData] = useState({
    contributions: [],
    total: {}, // Initialize total as an empty object to prevent errors
  });
  const [selectedYear, setSelectedYear] = useState("2024");
  const [loading, setLoading] = useState(true);
  const username = "ranagithubrr";
  const apiURL = `https://github-contributions-api.jogruber.de/v4/${username}`;

  // Fetch contributions data from the API
  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(apiURL);
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // Debugging API response
        setContributionsData(data);
      } catch (error) {
        console.error("Error fetching contributions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [apiURL]);

  // Get contributions for the selected year
  const getContributionsForYear = () => {
    console.log("Filtering contributions for:", selectedYear);
    return contributionsData.contributions.filter((day) =>
      day.date.startsWith(selectedYear)
    );
  };

  // Handle year selection
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  // Get color for a contribution level
  const getColorForLevel = (level) => {
    const colors = {
      0: "#161B22",
      1: "rgba(38, 198, 74, 0.5)",
      2: "rgba(38, 198, 74, 0.8)",
      3: "rgba(38, 198, 74, 1)",
    };
    return colors[level] || "#161B22"; // Fallback to default
  };

  // Fill empty cells in the grid
  const fillEmptyCells = (contributionsForYear) => {
    const totalDaysInYear =
      365 + (new Date(selectedYear, 1, 29).getDate() === 29 ? 1 : 0); // Leap year handling
    const gridData = new Array(totalDaysInYear).fill(null); // Initialize grid

    contributionsForYear.forEach((day) => {
      const dayOfYear = Math.floor(
        (new Date(day.date) - new Date(`${selectedYear}-01-01`)) /
          (1000 * 60 * 60 * 24)
      );
      if (dayOfYear >= 0 && dayOfYear < totalDaysInYear) {
        gridData[dayOfYear] = day;
      }
    });

    return gridData;
  };

  // Prepare contributions for rendering
  const contributionsForYear = getContributionsForYear();
  const gridData = fillEmptyCells(contributionsForYear);

  return (
    <div>
      {/* Year selection buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "30px",
          marginBottom: "20px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(contributionsData.total || {}).length > 0 ? (
          Object.keys(contributionsData.total).map((year) => (
            <button
              key={year}
              onClick={() => handleYearChange(year)}
              style={{
                padding: "5px 15px",
                backgroundColor: selectedYear === year ? "#2C6B2F" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {year}
            </button>
          ))
        ) : (
          <p>No years available</p>
        )}
      </div>

      {/* Contributions grid */}
      <div style={{ maxWidth: "100%", overflowX: "auto" }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "repeat(7, 1fr)",
                gridTemplateColumns: `repeat(${Math.ceil(
                  gridData.length / 7
                )}, 1fr)`,
                gap: "5px",
                margin: "0 auto",
                boxSizing: "border-box",
                backgroundColor: "#0D1117",
                padding: "20px",
                overflow: "auto",
              }}
            >
              {gridData.map((day, index) => (
                <div
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: day
                      ? getColorForLevel(day.level)
                      : "#E0E0E0", // Default color for empty cells
                    borderRadius: "3px",
                  }}
                  title={
                    day
                      ? `Date: ${day.date}, Contributions: ${day.count}`
                      : "No contributions"
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Github;
