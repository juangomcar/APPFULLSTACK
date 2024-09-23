interface ArtistData {
  name: string;
  genre?: string | null;
}

export async function createArtist(artistData: ArtistData) {
  const res = await fetch('https://apisongs-production.up.railway.app/api/artists', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(artistData),
  });

  const data = await res.json();
  console.log(data);
}
