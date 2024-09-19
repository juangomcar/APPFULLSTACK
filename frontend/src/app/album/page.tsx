import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import  AlbumsPage  from './albums-page';



function ProductsNewPage() {
    return (
        <div className="h-screen flex justify-center items-start mt-10"> {}
            <Card className="w-full max-w-sm p-6"> {}
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Albums Catalogue </CardTitle> {}
                </CardHeader>
                <CardContent>
                    <AlbumsPage />
                </CardContent>
            </Card>
        </div>
    );
}

export default ProductsNewPage;
