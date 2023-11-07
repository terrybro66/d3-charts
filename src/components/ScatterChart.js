import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const ScatterChart = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      // Set the dimensions of the canvas / graph
      const margin = { top: 30, right: 20, bottom: 30, left: 50 },
        width = 600 - margin.left - margin.right,
        height = 270 - margin.top - margin.bottom;

      // Set the ranges
      const x = d3.scaleLinear().range([0, width]);
      const y = d3.scaleLinear().range([height, 0]);

      // Scale the range of the data
      x.domain([0, d3.max(data, (d) => d.x)]);
      y.domain([0, d3.max(data, (d) => d.y)]);

      // Add the scatterplot
      svg
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("r", 5)
        .attr("cx", (d) => x(d.x))
        .attr("cy", (d) => y(d.y))
        .attr("fill", "blue");

      // Add the X Axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      // Add the Y Axis
      svg.append("g").call(d3.axisLeft(y));
    }
  }, [data]);

  return (
    <svg className="d3-component" width={600} height={300} ref={d3Container} />
  );
};

export default ScatterChart;
