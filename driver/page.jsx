'use client';
import { useState } from 'react';

export default function DriverPage(){
  const [form, setForm] = useState({ name:'', phone:'', license:'', vehicle:'' });
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/driver', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    });
    const data = await res.json();
    setMsg(res.ok ? 'Driver Registered Successfully!' : data.error);
  };

  return (
    <div style={{maxWidth:600,margin:'0 auto'}}>
      <h2>Become a Driver</h2>
      <form onSubmit={submit} style={{display:'grid',gap:10}}>
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
        <input name="license" placeholder="License Number" value={form.license} onChange={handleChange} required />
        <input name="vehicle" placeholder="Vehicle Model" value={form.vehicle} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
