export async function viewAlbums() {
    const res = await fetch('http://localhost:4000/api/albums', {
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
