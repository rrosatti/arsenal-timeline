import React from "react";
import type { Era, TimelineEvent, EventType } from "../data/events";
import EventCard from "./EventCard";

interface EraBlockProps {
  era: Era;
  events: TimelineEvent[];
  currentFilter: EventType | "all";
  expandedIndex: number | null;
  globalIndexOffset: number;
  onToggleExpand: (index: number) => void;
}

export const EraBlock: React.FC<EraBlockProps> = ({
  era,
  events,
  currentFilter,
  expandedIndex,
  globalIndexOffset,
  onToggleExpand,
}: EraBlockProps) => {
  const hasVisible = events.some(
    (e) => currentFilter === "all" || e.type === currentFilter,
  );

  if (!hasVisible) return null;

  return (
    <div className="era-block">
      <div className="era-label">{era.label}</div>
      {events.map((event, i) => {
        const globalIndex = globalIndexOffset + i;
        const hidden = currentFilter !== "all" && event.type !== currentFilter;

        if (hidden) return null;

        return (
          <EventCard
            key={globalIndex}
            event={event}
            isExpanded={expandedIndex === globalIndex}
            onToggle={() => onToggleExpand(globalIndex)}
          />
        );
      })}
    </div>
  );
};

export default EraBlock;
