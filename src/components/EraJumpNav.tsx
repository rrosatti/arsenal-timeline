import type { Era, EventType, TimelineEvent } from "../data/events";

interface EraJumpNavProps {
  eras: Era[];
  events: TimelineEvent[];
  currentFilter: EventType | "all";
}

export const EraJumpNav: React.FC<EraJumpNavProps> = ({
  eras,
  events,
  currentFilter,
}: EraJumpNavProps) => {
  const visibleEras = eras.filter((era) =>
    events.some(
      (event) =>
        event.year >= era.years[0] &&
        event.year <= era.years[1] &&
        (currentFilter === "all" || event.type === currentFilter),
    ),
  );

  return (
    <nav className="era-jump-nav" aria-label="Jump to era">
      <div className="era-jump-label">Jump to era</div>
      <div className="era-jump-links">
        {visibleEras.map((era) => {
          const [title] = era.label.split("·").map((part) => part.trim());

          return (
            <a key={era.id} className="era-jump-link" href={`#${era.id}`}>
              {title}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default EraJumpNav;
