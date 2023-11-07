import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const svg = d3.select(d3Container.current);

      // Clear the previous SVG content
      svg.selectAll("*").remove();

      // Your D3 code to bind data to the DOM, create scales, axes, shapes, etc.
      // For example, let's create a simple bar chart
      const margin = { top: 20, right: 30, bottom: 40, left: 90 };
      const width = 460 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const x = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .range([0, width]);

      const y = d3
        .scaleBand()
        .range([0, height])
        .domain(data.map((d) => d.name))
        .padding(0.1);

      svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", (d) => y(d.name))
        .attr("width", (d) => x(d.value))
        .attr("height", y.bandwidth())
        .attr("fill", "#69b3a2")
        .on("mouseover", function () {
          d3.select(this).attr("fill", "orange");
        })
        .on("mouseout", function () {
          d3.select(this).attr("fill", "steelblue");
        })
        .on("click", function (event, d) {
          alert(`You clicked on ${d.name}`);
        });

      // Add the x Axis
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},${height + margin.top})`)
        .call(d3.axisBottom(x));

      // Add the y Axis
      svg
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)
        .call(d3.axisLeft(y));
    }
  }, [data]); // Redraw chart if data or size changes

  return (
    <svg className="d3-component" width={460} height={400} ref={d3Container} />
  );
};

export default BarChart;
