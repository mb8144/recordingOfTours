import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [region, setRegion] = useState('empty');
  return ( 
    <div className="create">
      <h2>Add a new Tour</h2>
      <form>
        <label>Tour title: </label>
          <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <label>Your Description (still body): </label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        <label>Region: </label>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="empty"></option>
          <option value="Graubünden">Graubünden</option>
          <option value="Wallis">Wallis</option>
          <option value="Zentralschweiz">Zentralschweiz</option>
          <option value="Tessin">Tessin</option>
        </select>
        <button>Add Tour</button>
      </form>
    </div>
   );
}
 
export default Create;