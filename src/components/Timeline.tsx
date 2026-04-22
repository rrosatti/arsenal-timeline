import type { TimelineEvent, Era, EventType } from "../data/events";
import EraBlock from "./EraBlock";

interface TimelineProps {
  events: TimelineEvent[];
  eras: Era[];
  currentFilter: EventType | "all";
  expandedIndex: number | null;
  onToggleExpand: (index: number) => void;
}

export const Timeline: React.FC<TimelineProps> = ({
  events,
  eras,
  currentFilter,
  expandedIndex,
  onToggleExpand,
}: TimelineProps) => {
  return (
    <div className="timeline-wrap">
      <div className="timeline-line" />
      {eras.map((era) => {
        const eraEvents: TimelineEvent[] = [];
        const offsets: number[] = [];

        events.forEach((e, i) => {
          if (e.year >= era.years[0] && e.year <= era.years[1]) {
            eraEvents.push(e);
            offsets.push(i);
          }
        });

        if (eraEvents.length === 0) return null;

        return (
          <EraBlock
            key={era.label}
            era={era}
            events={eraEvents}
            currentFilter={currentFilter}
            expandedIndex={expandedIndex}
            globalIndexOffset={offsets[0]}
            onToggleExpand={onToggleExpand}
          />
        );
      })}
    </div>
  );
};

export default Timeline;
