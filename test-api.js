fetch('http://localhost:5000/api/volunteer', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: '',
    phone: '0123456789',
    city: 'Jaipur, Rajasthan',
    contribution: 'education',
    message: 'Hello There'
  })
}).then(res => res.text()).then(console.log).catch(console.error);
