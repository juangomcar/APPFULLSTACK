"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { viewAlbums } from './albums.api'; 

interface Album {
    id: number;
    title: string;
    releaseDate: string;
    artistId: number; 
}

function AlbumsPage() {
    const [albums, setAlbums] = useState<Album[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAlbums() {
            try {
                const data = await viewAlbums();
                console.log("Received albums data:", data);
                setAlbums(data);
            } catch (error) {
                setError('Failed to fetch albums');
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchAlbums();
    }, []);

    if (loading) {
        return <p>Loading albums...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="h-screen flex flex-col items-center mt-10">
            <h1 className="text-4xl font-bold mb-8">Albums List</h1>
            <div className="space-y-4 w-full max-w-3xl">
                {albums.length > 0 ? (
                    albums.map((album) => (
                        <Card key={album.id} className="w-full">
                            <CardHeader>
                                <CardTitle className="text-xl">{album.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>ArtistId: {album.artistId}</p>
                                <p>Release Date: {new Date(album.releaseDate).toLocaleDateString()}</p>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p>No albums available.</p>
                )}
            </div>
        </div>
    );
}

export default AlbumsPage;
