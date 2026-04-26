import { getEventId } from "../data/events";
import type { TimelineEvent } from "../data/events";
import EventCard from "./EventCard";

interface LegendsViewProps {
  events: TimelineEvent[];
  expandedIndex: number | null;
  onToggleExpand: (index: number) => void;
}

const getLegendGroup = (event: TimelineEvent) => {
  const title = event.title.toLowerCase();

  if (
    title.includes("goalkeeper") ||
    title.includes("left-back") ||
    title.includes("centre-back") ||
    title.includes("captain marvel") ||
    title.includes("the wall") ||
    title.includes("safe hands")
  ) {
    return "Defence";
  }

  if (
    title.includes("midfield") ||
    title.includes("engine") ||
    title.includes("heartbeat") ||
    title.includes("genius") ||
    title.includes("artist")
  ) {
    return "Midfield";
  }

  return "Attack";
};

export const LegendsView: React.FC<LegendsViewProps> = ({
  events,
  expandedIndex,
  onToggleExpand,
}: LegendsViewProps) => {
  const legends = events.filter((event) => event.type === "player");
  const groups = ["Attack", "Midfield", "Defence"].map((group) => ({
    title: group,
    events: legends.filter((event) => getLegendGroup(event) === group),
  }));

  return (
    <div className="alt-view-wrap">
      <section className="view-summary-band">
        <div className="view-summary-card">
          <span className="view-summary-kicker">Club Legends</span>
          <strong>{legends.length}</strong>
          <span>player stories across the timeline</span>
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="alt-view-section">
          <div className="alt-view-header">
            <h2>{group.title}</h2>
            <p>
              Browse the players whose stories shape this version of Arsenal's
              history.
            </p>
          </div>
          <div className="alt-view-list alt-view-list-legends">
            {group.events.map((event) => {
              const index = events.indexOf(event);

              return (
                <EventCard
                  key={getEventId(event)}
                  eventId={getEventId(event)}
                  event={event}
                  isExpanded={expandedIndex === index}
                  onToggle={() => onToggleExpand(index)}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default LegendsView;
