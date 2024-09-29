interface ProductData {
  title: string;
  duration: number;
  albumId: number;
}

export async function createProduct(productData: ProductData) {
  const res = await fetch('https://apisongs-production.up.railway.app/api/songs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  const data = await res.json();
  console.log(data);
}
