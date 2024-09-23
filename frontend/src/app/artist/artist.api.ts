export async function viewArtists() {
  const res = await fetch('https://apisongs-production.up.railway.app/api/artists', {
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
