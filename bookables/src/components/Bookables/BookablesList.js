import { bookables } from "../../static.json";
import { useState } from "react";
import { FaArrowRight } from "react-icons/all";

export default function BookablesList() {
  const group = "Rooms";
  const bookablesInGroup = bookables.filter((b) => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(1);

  function changeBookable(selectedIndex) {
    setBookableIndex(selectedIndex);
    console.log(selectedIndex);
  }

  function nextBookable() {
    setBookableIndex((i) => (i + 1) % bookablesInGroup.length);
  }
  return (
    <div>
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
