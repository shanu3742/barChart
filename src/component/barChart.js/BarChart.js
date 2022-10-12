import React, { useRef, useState } from 'react';
import * as d3 from 'd3';
import { convertObjectIntoArray } from '../../setting';

const BarChart = ({ objectData }) => {
  const [value, labelDta] = convertObjectIntoArray(objectData);
  const [data, setData] = useState(value);
  const [label, setlLabel] = useState(labelDta);
  const svgRef = useRef(null);

  React.useEffect(() => {
    const width = 400;
    const height = 300;
    const yScaleforText = (i) => {
      return yScale(i);
    };
    const svg = d3
      .select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('overflow', 'visible')
      .style('margin-top', '40px')
      .style('background', '#b1e1ef')
      .style('margin-left', '50px');

    const xScale = d3
      .scaleBand()
      .domain(data.map((e, i) => i))
      .range([0, width])
      .padding(0.5);
    const yScale = d3.scaleLinear().domain([0, height]).range([height, 0]);

    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.append('g').call(xAxis).attr('transform', `translate(0,${height})`);
    svg.append('g').call(yAxis);

    svg
      .selectAll('.bar')
      .data(data)
      .join('rect')
      .attr('x', (v, i) => xScale(i))
      .attr('y', yScale)
      .attr('width', xScale.bandwidth())
      .attr('height', (val) => height - yScale(val))
      .attr('stroke', 'red')
      .attr('fill', '#eedab4');

    svg
      .selectAll('.text')
      .data(label)
      .join('text')
      .attr('x', (v, i) => xScale(i))
      .attr('y', (v, i) => yScaleforText(data[i]))
      .text((d, i) => d);
  }, [data, label]);
  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
