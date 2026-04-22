import { useState } from "react";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import Timeline from "./components/Timeline";
import { events, eras } from "./data/events";
import type { EventType } from "./data/events";

export const App = () => {
  const [currentFilter, setCurrentFilter] = useState<EventType | "all">("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  function handleToggleExpand(index: number) {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }

  return (
    <div className="arsenal-root">
      <Hero />
      <FilterBar
        events={events}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />
      <Timeline
        events={events}
        eras={eras}
        currentFilter={currentFilter}
        expandedIndex={expandedIndex}
        onToggleExpand={handleToggleExpand}
      />
      <div className="footer-bar">
        Victoria Concordia Crescit — Victory Through Harmony
      </div>
    </div>
  );
};

export default App;
