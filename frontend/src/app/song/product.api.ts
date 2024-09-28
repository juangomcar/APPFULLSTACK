export async function viewProduct() {
  const res = await fetch('https://apisongs-production.up.railway.app/api/songs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (!res.ok) {
    throw new Error('Error fetching songs');
  }

  const data = await res.json();
  return data;
}
