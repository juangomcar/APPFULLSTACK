"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { viewProduct } from './product.api'; 

interface Song {
    id: number;
    title: string;
    duration: number;
    albumId: number; 
}

function SongsPage() {
    const [songs, setSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchSongs() {
            try {
                const data = await viewProduct();
                console.log("Received data:", data); 
                setSongs(data);
            } catch (error) {
                setError('Failed to fetch songs');
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchSongs();
    }, []);

    if (loading) {
        return <p>Loading songs...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="h-screen flex flex-col items-center mt-10">
            
            <div className="space-y-4 w-full max-w-3xl">
                {songs.length > 0 ? (
                    songs.map((song) => (
                        <Card key={song.id} className="w-full">
                            <CardHeader>
                                <CardTitle className="text-xl">{song.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Duration: {song.duration} seconds</p>
                                <p>
                                    AlbumId: {song.albumId}
                                </p>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <p>No songs available.</p>
                )}
            </div>
        </div>
    );
}

export default SongsPage;
