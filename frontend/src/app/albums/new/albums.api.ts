// eslint-disable-next-line @typescript-eslint/no-explicit-any

export async function createAlbum(productData: any) {
    const res = await fetch('http://localhost:4000/api/albums', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });

    const data = await res.json();
    console.log(data); 
}
