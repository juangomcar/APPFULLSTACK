interface AlbumData {
  title: string;
  releaseDate: Date | null;
  artistId: number;
  imageUrl?: string | null;
}

export async function createAlbum(productData: AlbumData) {
  const res = await fetch('https://apisongs-production.up.railway.app/api/albums', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  const data = await res.json();
  console.log(data);
}
