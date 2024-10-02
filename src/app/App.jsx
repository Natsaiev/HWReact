import { useCallback, useMemo, useState } from "react";
import { UserList } from "./Components/UserList";

const users = [
  {
    id: 1,
    name: "Ralph",
  },
  {
    id: 2,
    name: "Holly",
  },
  {
    id: 3,
    name: "Rose",
  },
  {
    id: 4,
    name: "George",
  },
  {
    id: 5,
    name: "Neva",
  },
];
function App() {
  const [filter, setFilter] = useState("");
  const filterUsers = useCallback((filter) => {
    if (filter.length !== 0) {
      const filteredArray = users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredArray;
    }
    return users;
  }, []);
  const filteredArray = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  );
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList userArray={filteredArray} />
    </div>
  );
}

export default App;