import { bookables } from "../../static.json";
import { useState } from "react";
import { FaArrowRight } from "react-icons/all";

export default function BookablesList() {
  const [bookableIndex, setBookableIndex] = useState(0);
  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const groups = [...new Set(bookables.map((b) => b.group))];

  function changeBookable(selectedIndex) {
    setBookableIndex(selectedIndex);
    console.log(selectedIndex);
  }

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  }
  return (
    <div>
      <select value={group} onChange={(e) => setGroup(e.target.value)}>
        {groups.map((g) => (
          <option value={g} key={g}>
            {g}
          </option>
        ))}
      </select>
      <ul className="bookables items-list-nav">
        {bookablesInGroup.map((b, i) => (
          <li key={b.id} className={i === bookableIndex ? "selected" : null}>
            <button className="btn" onClick={() => changeBookable(i)}>
              {b.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        <button className="btn" autoFocus onClick={nextBookable}>
          <FaArrowRight /> <span>Next</span>
        </button>
      </p>
    </div>
  );
}
