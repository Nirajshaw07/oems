'use client';
import { useState } from 'react';

export default function ContactPage(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [msg, setMsg] = useState(null);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const submit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(form)
    });
    const data = await res.json();
    setMsg(res.ok ? 'Message Sent Successfully!' : data.error);
  };

  return (
    <div style={{maxWidth:600,margin:'0 auto'}}>
      <h2>Contact Us</h2>
      <form onSubmit={submit} style={{display:'grid',gap:10}}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} rows="4" required />
        <button type="submit">Send</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
