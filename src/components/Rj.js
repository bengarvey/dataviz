import React from 'react';
import { ResponsiveNetworkFrame } from 'semiotic';
import Nav from './Nav';

const companyData = [
  {
    "name": "Magento",
    "fill": "#eb5202",
    "stroke": "#eb5202",
    "size": 21
  },
  {
    "name": "Stitch",
    "fill": "#ffd600",
    "stroke": "#ffd600",
    "size": 15
  },
  {
    "name": "Guru",
    "fill": "#00d498",
    "stroke": "#00d498",
    "size": 7
  },
  {
    "name": "Sidecar",
    "fill": "#00273c",
    "stroke": "#00273c",
    "size": 6
  },
  {
    "name": "Blackfynn",
    "fill": "#090e43",
    "stroke": "#090e43",
    "size": 4
  },
  {
    "name": "Fishtown Analytics",
    "fill": "#005676",
    "stroke": "#005676",
    "size": 4
  },
  {
    "name": "Comcast",
    "fill": "#e80000",
    "stroke": "#e80000",
    "size": 3
  },
  {
    "name": "InVision",
    "fill": "#ff005b",
    "stroke": "#ff005b",
    "size": 3
  },
  {
    "name": "Logicworks",
    "fill": "#0095e2",
    "stroke": "#0095e2",
    "size": 2
  },
  {
    "name": "Looker",
    "fill": "#884fe7",
    "stroke": "#884fe7",
    "size": 2
  },
  {
    "name": "RoundCorner",
    "fill": "#0094d8",
    "stroke": "#0094d8",
    "size": 2
  },
  {
    "name": "UPenn",
    "fill": "#040850",
    "stroke": "#040850",
    "size": 2
  },
  {
    "name": "Vistar Media",
    "fill": "#dc4448",
    "stroke": "#dc4448",
    "size": 2
  },
  {
    "name": "Aptible",
    "fill": "#25354e",
    "stroke": "#25354e",
    "size": 2
  },
  {
    "name": "Other",
    "fill": "#aaaaaa",
    "stroke": "#aaaaaa",
    "size": 94
  }
];

var network = {
  nodes: [{
    id: 0,
    name: "RJMetrics",
    size: 176,
    fill: 'orange',
    stroke: 'orange'
  }],
  links: []
}

companyData.forEach( (company, index) => {
  var node = {
    id: index + 1,
    name: company.name,
    size: company.size,
    fill: company.fill,
    stroke: company.stroke
  };
  var link = {
    source: 0,
    target: index + 1,
    value: company.size,
    fill: company.fill,
    stroke: company.stroke
  };
  network.nodes.push(node);
  network.links.push(link);
});

const colors = {
  mother: '#faa1c7',
  father: '#009ddc',
  spouse: '#fcde9c',
  light: "#15b097",
  dark: "#393e41",
  neutral: "#aaaaaa",
  droid: "#f4d35e",
  killed: '#ff3333',
  trained: '#999999'
}

function getEdgeStrength(type) {
  if (type == "mother" || type == "father" || type == "spouse") {
    return 0.2;
  }
  else {
    return 0.1;
  }
}

var annoSettings = {
  layout: {
    orient: 'right',
    textPadding: 38,
    marginOffset: 50
  },
  x: 50
};
const Rj = () => (
  <div className="chartContainer">
    <h1>RJMetrics</h1>
    <h3>Where are they now?</h3>
    <ResponsiveNetworkFrame
        size={[360, 700 ]}
        responsiveWidth={true}
        edges={network.links}
        nodes={network.nodes}
        nodeStyle={d => ({
          fill: d.fill,
          stroke: d.stroke
        })}
        edgeStyle={(d) => ({ stroke: d.stroke, fill: d.fill, opacity: 0.5, strokeWidth: '1px' })}
        networkType={{ type: 'sankey', orient: 'justify', iterations: 500, nodeWidth: 100, nodePadding: 22}}
        nodeIDAccessor={"id"}
        zoomToFit={true}
        nodeLabels={d => d.name}
        sourceAccessor={"source"}
        targetAccessor={"target"}
        nodeSizeAccessor={d => d.size}
        margin={{left: 25, top: 20, bottom: 20, right: 25}}
    />
    <div className="notes nextReport">
      <h3>Notes and Sources</h3>
      <p>This sankey diagram shows where people went after RJMetrics.</p>
      <p>I worked there from 3/13 until it was <a href="https://technical.ly/philly/2016/08/01/rjmetrics-magento-acquisition-stitch-cloudbi-pipeline/">acquired by Magento</a> 7/16. Seeing it go from 20 people to 140+ was exhilarating. Sometimes I get nostalgic and think about all the smart people I worked with and what we could have done differently, but I hope it was a positive experience for everyone who worked there.</p>
      <p>Someone accused me once of <a href="https://twitter.com/bengarvey/status/962124327213846528">drinking the kool aid</a> and it made me laugh. I was surrounded by scores of smart 20-somethings in their first job who didn't realize this might be the best one of their lives.</p>
      <p>Not everyone's experience was as good as mine and sure, some people were treated unfairly but I loved RJMetrics and did my best work there. <a href="https://www.linkedin.com/search/results/index/?keywords=rjmetrics&origin=GLOBAL_SEARCH_HEADER">RIP</a></p>
      <p>Tech: <a href="https://emeeks.github.io/semiotic">Semiotic</a>, javascript, a spreadsheet maintained by Bob Moore and K Rich</p>
    </div>
    <Nav/>
  </div>
);

export default Rj
