import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [region, setRegion] = useState('');
  const [date, setDate] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);
    const tour = {title, date, body, region};
    fetch('http://localhost:8000/tours', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(tour)
    }).then(() => {
      setIsPending(false);
      navigate('/');
    })
    
  }
  return ( 
    <div className="create">
      <h2>Add a new Tour</h2>
      <form onSubmit={handleSubmit}>

        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            id="floatingTitle"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ></input>
          <label for="floatingTitle">Titel</label>
        </div>

          <input
            className="form-control"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

        <div class="form-floating">
          <textarea 
            class="form-control"
            id="floatingTextarea"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>
          <label for="floatingTextarea">Description</label>
        </div>

        <select
          className="form-select"
          required
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option selected value="" disabled>Choose the region</option>
          <option value="Graubünden">Graubünden</option>
          <option value="Wallis">Wallis</option>
          <option value="Zentralschweiz">Zentralschweiz</option>
          <option value="Tessin">Tessin</option>
        </select>

        {!isPending && <button>Add Tour</button>}
        {isPending && <button disabled>Adding Tour...</button>}
      </form>
    </div>
   );
}
 
export default Create;