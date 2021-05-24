import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Read from "./components/read";
import Edit from "./components/edit";
import { collection } from "./components/firebase";
import { useEffect, useState } from "react";

function App() {
  const [reading, setReading] = useState([]);
  const [editing, setEditing] = useState({});
  const [mode, setMode] = useState("Read Mode");

  const store = () => {
    collection.child("Data").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setReading([Object.assign(snapshot.val())]);
      setEditing({ ...snapshot.val() });
    });
  };

  useEffect(() => {
    store();
  }, []);

  const handleimage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setEditing({
        ...editing,
        pro: URL.createObjectURL(event.target.files[0])
      });
    }
  };
  const handlechange = (e) => {
    const { name, value } = e.target;

    setEditing({ ...editing, [name]: value });
  };
  const changeMode = () => {
    if (mode === "Read Mode") {
      setMode("Edit Mode");
    } else {
      setMode("Read Mode");

      collection.child("Data").set(editing, (err) => {
        if (err) console.log(err);
      });
    }
  };

  const Change = () => {
    if (mode === "Read Mode") {
      return <Read {...{ reading }} />;
    } else {
      return (
        <Edit
          {...{
            editing,
            handleimage,
            handlechange
          }}
        />
      );
    }
  };
  document.body.style.backgroundColor = editing.color;
  return (
    <div className="container   border border-primary">
      <div className="text-center">
        <button
          className="btn-primary "
          onClick={changeMode}>
          {mode}
        </button>
        <Change />
      </div>
    </div>
  );
}

export default App;
