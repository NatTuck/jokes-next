"use client";

import { useState } from "react";

export default function Form() {
  const [tab, setTab] = useState(0);
  const [text, setText] = useState("");

  return (
    <main className="text-center min-h-screen">
      <h1 className="text-2xl py-8">Form</h1>
      <p>
        <button className="m-2 p-1 ring-1"
                onClick={() => setTab(0)}>Tab0</button>
        <button className="m-2 p-1 ring-1"
                onClick={() => setTab(1)}>Tab1</button>
      </p>
      { (tab == 0) ? <Tab0 text={text} setText={setText} /> : <Tab1 /> }
    </main>
  );
}

function Tab0({text, setText}) {
  return (
    <div>
      <input type="text" value={text} onChange={(ev) => setText(ev.target.value)} />
    </div>
  );
}

function Tab1() {
  return (
    <p>Tab 1</p>
  );
}

