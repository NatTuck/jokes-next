"use client";

import { useState, useEffect } from "react";
import Plotly from 'plotly.js-basic-dist';

export default function Form() {
  const [tab, setTab] = useState(0);

  return (
    <main className="text-center min-h-screen">
      <h1 className="text-2xl py-8">Form</h1>
      <p>
        <button className="m-2 p-1 ring-1"
                onClick={() => setTab(0)}>Tab0</button>
        <button className="m-2 p-1 ring-1"
                onClick={() => setTab(1)}>Tab1</button>
      </p>
      { (tab == 0) ? <Tab0 /> : <Tab1 /> }
    </main>
  );
}

function makeData(xx) {
  // https://plotly.com/javascript/bar-charts/
  return [
    {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [xx, 14, 23],
      type: 'bar'
    }
  ];
}

function Tab0() {
  var data = makeData(20);

  useEffect(() => {
    Plotly.newPlot('myDiv', data);
  });

  var yy = 10;
  function click(ev) {
    ev.preventDefault();
    yy = (yy + 7) % 30;
    Plotly.react('myDiv', makeData(yy));
  }

  return (
    <div className="m-8">
      <button onClick={click}>click</button>
      <div id="myDiv" style={{width: "800px", height: "600px"}}>
        Graph goes here.
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <p>Tab 1</p>
  );
}

