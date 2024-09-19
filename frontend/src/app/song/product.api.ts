export async function viewProduct() {
    const res = await fetch('http://localhost:4000/api/songs', {
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
