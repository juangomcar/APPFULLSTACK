"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { viewArtists } from './artist.api'; 

interface Artist {
    id: number;
    name: string;
    genre: string | null;
    createdAt: string;
}

function ArtistsPage() {
    const [artists, setArtists] = useState<Artist[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchArtists() {
            try {
                const data = await viewArtists();
                console.log("Received artists data:", data); 
                setArtists(data);
            } catch (error) {
                setError('Failed to fetch artists');
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchArtists();
    }, []);

    if (loading) {
        return <p>Loading artists...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="h-screen flex flex-col items-center mt-10">
            <h1 className="text-4xl font-bold mb-8">Artists List</h1>
            <div className="space-y-4 w-full max-w-3xl">
                {artists.length > 0 ? (
                    artists.map((artist) => (
                        <Card key={artist.id} className="w-full">
                            <CardHeader>
                                <CardTitle className="text-xl">{artist.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Genre: {artist.genre ? artist.genre : "No genre specified"}</p>
                                <p>Created At: {new Date(artist.createdAt).toLocaleDateString()}</p>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p>No artists available.</p>
                )}
            </div>
        </div>
    );
}

export default ArtistsPage;
