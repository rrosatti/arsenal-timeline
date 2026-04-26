import React from "react";
import { getEventId } from "../data/events";
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
  const [title, range] = era.label.split("·").map((part) => part.trim());
  const hasVisible = events.some(
    (e) => currentFilter === "all" || e.type === currentFilter,
  );
  const visibleCount = events.filter(
    (event) => currentFilter === "all" || event.type === currentFilter,
  ).length;

  if (!hasVisible) return null;

  return (
    <section className="era-block" id={era.id}>
      <div className="era-header">
        <div className="era-kicker">Era</div>
        <div className="era-heading-row">
          <div className="era-label">{title}</div>
          <div className="era-range">{range}</div>
        </div>
        <div className="era-meta">
          <span>{visibleCount} events</span>
        </div>
        <p className="era-intro">{era.intro}</p>
      </div>
      {events.map((event, i) => {
        const globalIndex = globalIndexOffset + i;
        const hidden = currentFilter !== "all" && event.type !== currentFilter;

        if (hidden) return null;

        return (
          <EventCard
            key={getEventId(event)}
            eventId={getEventId(event)}
            event={event}
            isExpanded={expandedIndex === globalIndex}
            onToggle={() => onToggleExpand(globalIndex)}
          />
        );
      })}
    </section>
  );
};

export default EraBlock;
