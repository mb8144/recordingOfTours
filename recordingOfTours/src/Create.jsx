import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [region, setRegion] = useState('empty');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);
    const tour = {title, body, region};
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
        {!isPending && <button>Add Tour</button>}
        {isPending && <button disabled>Adding Tour...</button>}
      </form>
    </div>
   );
}
 
export default Create;