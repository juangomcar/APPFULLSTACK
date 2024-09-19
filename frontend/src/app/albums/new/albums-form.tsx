"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createAlbum } from "./albums.api"; 
import { useRouter } from "next/navigation";


interface AlbumFormData {
    title: string;
    releaseDate?: string;
    artistId: number;
    imageUrl?: string;
}

export function AlbumForm() {
    const { register, handleSubmit, reset } = useForm<AlbumFormData>();
    const router = useRouter();

    const onSubmit = async (data: AlbumFormData) => { 
        await createAlbum({
            title: data.title,
            releaseDate: data.releaseDate ? new Date(data.releaseDate) : null,
            artistId: data.artistId,
            imageUrl: data.imageUrl || null,
        });
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} className="space-y-4">
            <div className="form-group">
                <Label htmlFor="title">Album Title</Label>
                <Input
                    {...register('title')}
                    type="text"
                    id="title"
                    placeholder="Enter album title"
                    className="w-full h-10"
                    required
                />
            </div>

            <div className="form-group">
                <Label htmlFor="releaseDate">Release Date</Label>
                <Input
                    {...register('releaseDate')}
                    type="date"
                    id="releaseDate"
                    className="w-full h-10"
                />
            </div>

            <div className="form-group">
                <Label htmlFor="artistId">Artist ID</Label>
                <Input
                    {...register('artistId', { valueAsNumber: true })}
                    type="number"
                    id="artistId"
                    placeholder="Enter artist ID"
                    className="w-full h-10"
                    required
                />
            </div>

            <div className="form-group">
                <Label htmlFor="imageUrl">Image URL</Label>
                <Input
                    {...register('imageUrl')}
                    type="text"
                    id="imageUrl"
                    placeholder="Enter image URL (optional)"
                    className="w-full h-10"
                />
            </div>

            <div className="button-group flex justify-center">
                <Button type="submit" className="btn btn-primary w-full h-12">
                    Create Album
                </Button>
            </div>
        </form>
    );
}

export default AlbumForm;
