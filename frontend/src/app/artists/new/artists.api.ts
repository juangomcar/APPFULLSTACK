interface ArtistData {
    name: string;
    genre?: string | null;
}

export async function createArtist(artistData: ArtistData) {
    const res = await fetch('http://localhost:4000/api/artists', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(artistData),
    });

    const data = await res.json();
    console.log(data);
}
