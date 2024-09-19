import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SongsPage from './songs-page'; 

function ProductsNewPage() {
    return (
        <div className="h-screen flex justify-center items-start mt-10">
            <Card className="w-full max-w-lg p-6">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        Songs Catalogue
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <SongsPage /> {}
                </CardContent>
            </Card>
        </div>
    );
}

export default ProductsNewPage;
