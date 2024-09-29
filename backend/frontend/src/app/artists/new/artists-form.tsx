"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createArtist } from "./artists.api"; 
import { useRouter } from "next/navigation";

interface ArtistFormData {
    name: string;
    genre?: string; 
}

export function ArtistForm() {
    const { register, handleSubmit, reset } = useForm<ArtistFormData>(); 
    const router = useRouter();

    const onSubmit = async (data: ArtistFormData) => { 
        await createArtist({
            name: data.name,
            genre: data.genre || null,
        });
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} className="space-y-4">
            <div className="form-group">
                <Label htmlFor="name">Artist Name</Label>
                <Input
                    {...register('name')}
                    type="text"
                    id="name"
                    placeholder="Enter artist name"
                    className="w-full h-10"
                    required
                />
            </div>

            <div className="form-group">
                <Label htmlFor="genre">Genre</Label>
                <Input
                    {...register('genre')}
                    type="text"
                    id="genre"
                    placeholder="Enter genre (optional)"
                    className="w-full h-10"
                />
            </div>

            <div className="button-group flex justify-center">
                <Button type="submit" className="btn btn-primary w-full h-12">
                    Create Artist
                </Button>
            </div>
        </form>
    );
}

export default ArtistForm;
