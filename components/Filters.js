export default function Filters() {
  return (
    <aside className="filters">

      <h2>Filters</h2>

      <label>
        <input type="checkbox" defaultChecked={false} />
        Customizable
      </label>

      <label>
        <input type="checkbox" defaultChecked={false} />
        Occasion
      </label>

      <label>
        <input type="checkbox" defaultChecked={false} />
        Work
      </label>

      <label>
        <input type="checkbox" defaultChecked={false} />
        Fabric
      </label>

      <label>
        <input type="checkbox" defaultChecked={false} />
        Pattern
      </label>

    </aside>
  );
}