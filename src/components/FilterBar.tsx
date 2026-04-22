import type { TimelineEvent, EventType } from "../data/events";

interface FilterBarProps {
  events: TimelineEvent[];
  currentFilter: EventType | "all";
  onFilterChange: (filter: EventType | "all") => void;
}

const filters: { key: EventType | "all"; label: string; typeClass: string }[] =
  [
    { key: "all", label: "All", typeClass: "" },
    { key: "trophy", label: "Trophies", typeClass: "trophy" },
    { key: "player", label: "Legends", typeClass: "player" },
    { key: "era", label: "Milestones", typeClass: "era" },
    { key: "ground", label: "Stadiums", typeClass: "ground" },
  ];

export const FilterBar: React.FC<FilterBarProps> = ({
  events,
  currentFilter,
  onFilterChange,
}: FilterBarProps) => {
  const counts: Record<string, number> = { all: events.length };
  for (const e of events) {
    counts[e.type] = (counts[e.type] || 0) + 1;
  }

  return (
    <div className="filter-bar">
      {filters.map(({ key, label, typeClass }) => {
        const isActive = currentFilter === key;
        const className = ["filter-btn", typeClass, isActive ? "active" : ""]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={key}
            className={className}
            onClick={() => onFilterChange(key)}
          >
            {label} <span className="count-badge">{counts[key] || 0}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;
