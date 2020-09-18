import React, { Component } from 'react'
import * as d3 from 'd3'

class Ecg extends Component {
  constructor (props, context) {
    super(props, context)

  }

  static defaultProps = {
    margin: { top: 10, right: 40, bottom: 30, left: 60 },
    width: 800,
    height: 400,
    data: []
  }

  componentDidMount () {
    this.initECG()
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.data !== prevProps.data) {
      this.initECG()
    }
  }

  initECG = () => {
    const margin = this.props.margin,
      width = this.props.width - margin.left - margin.right,
      height = this.props.height - margin.top - margin.bottom

    // append the svg object to the body of the page
    const svg = d3.select(`#${this.props.id}`)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      // translate this svg element to leave some margin.
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
    const data = this.props.data
    const x = d3.scaleTime()
      .domain(d3.extent(data, function (d) { return d.date }))
      .range([0, width])
    svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function (d) { return +d.value })])
      .range([height, 0])
    svg.append('g')
      .call(d3.axisLeft(y))

    // Add the line
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line()
        .x(function (d) { return x(d.date) })
        .y(function (d) { return y(d.value) })
      )
  }

  render () {
    return (
      <div id={this.props.id}></div>
    )
  }
}

export default Ecg