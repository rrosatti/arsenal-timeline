export type AppView = "timeline" | "trophies" | "legends";

interface ViewSwitcherProps {
  currentView: AppView;
  onChange: (view: AppView) => void;
}

const views: { key: AppView; label: string }[] = [
  { key: "timeline", label: "Timeline" },
  { key: "trophies", label: "Trophies" },
  { key: "legends", label: "Legends" },
];

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({
  currentView,
  onChange,
}: ViewSwitcherProps) => {
  return (
    <div className="view-switcher" role="tablist" aria-label="Timeline views">
      {views.map((view) => {
        const selected = currentView === view.key;

        return (
          <button
            key={view.key}
            className={`view-switcher-btn${selected ? " active" : ""}`}
            onClick={() => onChange(view.key)}
            role="tab"
            aria-selected={selected}
          >
            {view.label}
          </button>
        );
      })}
    </div>
  );
};

export default ViewSwitcher;
