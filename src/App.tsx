import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import FilterBar from "./components/FilterBar";
import EraJumpNav from "./components/EraJumpNav";
import LegendsView from "./components/LegendsView";
import Timeline from "./components/Timeline";
import TrophiesView from "./components/TrophiesView";
import ViewSwitcher from "./components/ViewSwitcher";
import { events, eras, getEventId } from "./data/events";
import type { EventType } from "./data/events";
import type { AppView } from "./components/ViewSwitcher";

export const App = () => {
  const [currentView, setCurrentView] = useState<AppView>("timeline");
  const [currentFilter, setCurrentFilter] = useState<EventType | "all">("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) {
        setExpandedIndex(null);
        return;
      }

      const eventIndex = events.findIndex(
        (event) => getEventId(event) === hash,
      );
      if (eventIndex === -1) return;

      const event = events[eventIndex];
      setCurrentFilter((prev) =>
        prev === "all" || prev === event.type ? prev : "all",
      );
      setExpandedIndex(eventIndex);
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  function handleToggleExpand(index: number) {
    setExpandedIndex((prev) => {
      const nextIndex = prev === index ? null : index;

      if (nextIndex === null) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      } else {
        window.history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}#${getEventId(events[nextIndex])}`,
        );
      }

      return nextIndex;
    });
  }

  function handleViewChange(view: AppView) {
    setCurrentView(view);
    setExpandedIndex(null);
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
  }

  return (
    <div className="arsenal-root">
      <Hero />
      <ViewSwitcher currentView={currentView} onChange={handleViewChange} />
      <FilterBar
        events={events}
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
      />
      {currentView === "timeline" && (
        <>
          <EraJumpNav
            eras={eras}
            events={events}
            currentFilter={currentFilter}
          />
          <Timeline
            events={events}
            eras={eras}
            currentFilter={currentFilter}
            expandedIndex={expandedIndex}
            onToggleExpand={handleToggleExpand}
          />
        </>
      )}
      {currentView === "trophies" && (
        <TrophiesView
          events={events}
          expandedIndex={expandedIndex}
          onToggleExpand={handleToggleExpand}
        />
      )}
      {currentView === "legends" && (
        <LegendsView
          events={events}
          expandedIndex={expandedIndex}
          onToggleExpand={handleToggleExpand}
        />
      )}
      <div className="footer-bar">
        Victoria Concordia Crescit — Victory Through Harmony
      </div>
    </div>
  );
};

export default App;
