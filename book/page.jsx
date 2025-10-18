'use client';
import { useState } from 'react';

export default function BookPage(){
  const [form, setForm] = useState({ pickup:'', drop:'', datetime:'', type:'economy' });
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/book', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    });
    const data = await res.json();
    setMsg(res.ok ? 'Ride Booked Successfully!' : data.error);
  };

  return (
    <div style={{maxWidth:600,margin:'0 auto'}}>
      <h2>Book a Ride</h2>
      <form onSubmit={submit} style={{display:'grid',gap:10}}>
        <input name="pickup" placeholder="Pickup Location" value={form.pickup} onChange={handleChange} required />
        <input name="drop" placeholder="Drop Location" value={form.drop} onChange={handleChange} required />
        <input name="datetime" placeholder="Date & Time" value={form.datetime} onChange={handleChange}/>
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="economy">Economy</option>
          <option value="premium">Premium</option>
          <option value="electric">Electric</option>
        </select>
        <button type="submit">Book Now</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
