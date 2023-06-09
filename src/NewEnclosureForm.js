import React, { useState } from "react";
import { Button } from "react-bootstrap";
function NewEnclosureForm({ onAdd, setSearch }) {
  const [area, setArea] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:5555/enclosures", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area: area,
        image: image,
      }),
    })
      .then((res) => res.json())
      .then((newEnclosure) => onAdd(newEnclosure));
  }
  return (
    <>
      <div className="new-enclosure-form">
        <h2>New Enclosure</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="area"
            placeholder="area"
            value={area}
            onChange={(event) => setArea(event.target.value)}
          />
          <input
            type="text"
            name="enclosure photo"
            placeholder="photo"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          <Button type="submit" variant="light">
            Add Enclosure
          </Button>
        </form>
      </div>
    </>
  );
}
export default NewEnclosureForm;
