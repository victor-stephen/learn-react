export default function MasterControl({ type, toggleAll }) {
  return (
    <button
      className={`all-${type}`}
      onClick={() => toggleAll(type)}
    >
      Turn All {type === "on" ? "On" : "Off"}
    </button>
  );
}
