"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createProduct } from "./products.api"; 
import { useRouter } from "next/navigation";

export function ProductForm() {
    const { register, handleSubmit, reset } = useForm();
    const router = useRouter();

    const onSubmit = async (data: any) => { 
        await createProduct({
            ...data,
            price: parseFloat(data.price),
        });
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} className="space-y-4">
            {/* Campo para el nombre de la canción */}
            <div className="form-group">
                <Label htmlFor="name">Song Name</Label>
                <Input 
                    {...register('name')}
                    type="text" 
                    id="name" 
                    placeholder="Enter song name" 
                    className="w-full h-10" 
                    required 
                />
            </div>

            {/* Campo para el artista */}
            <div className="form-group">
                <Label htmlFor="artist">Artist</Label>
                <Input 
                    {...register('artist')}
                    type="text" 
                    id="artist" 
                    placeholder="Enter artist name"
                    className="w-full h-10"
                    required 
                />
            </div>

            {/* Campo para el álbum */}
            <div className="form-group">
                <Label htmlFor="album">Album</Label>
                <Input 
                    {...register('album')}
                    type="text" 
                    id="album" 
                    placeholder="Enter album name"
                    className="w-full h-10"
                />
            </div>

            {/* Campo para la descripción */}
            <div className="form-group">
                <Label htmlFor="description">Description</Label>
                <Input 
                    {...register('description')}
                    type="text" 
                    id="description" 
                    placeholder="Enter description"
                    className="w-full h-10"
                    required 
                />
            </div>

            {/* Campo para el género */}
            <div className="form-group">
                <Label htmlFor="genre">Genre</Label>
                <select id="genre" className="w-full h-10 input" {...register('genre')} required>
                    <option value="">-- Select a genre --</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                    <option value="jazz">Jazz</option>
                    <option value="hiphop">Hip-Hop</option>
                    <option value="classical">Classical</option>
                    <option value="electronic">Electronic</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            {/* Campo para la fecha de lanzamiento */}
            <div className="form-group">
                <Label htmlFor="releaseDate">Release Date</Label>
                <Input 
                    {...register('releaseDate')}
                    type="date" 
                    id="releaseDate"
                    className="w-full h-10"
                    required 
                />
            </div>

            {/* Campo para la duración en segundos */}
            <div className="form-group">
                <Label htmlFor="duration">Duration (seconds)</Label>
                <Input 
                    {...register('duration')}
                    type="number" 
                    id="duration" 
                    placeholder="Enter song duration in seconds"
                    className="w-full h-10"
                    required 
                    min="0" 
                />
            </div>

            {/* Campo para los derechos de autor */}
            <div className="form-group">
                <Label htmlFor="copyright">Copyright</Label>
                <Input 
                    {...register('copyright')}
                    type="text" 
                    id="copyright" 
                    placeholder="Enter copyright information"
                    className="w-full h-10"
                    required 
                />
            </div>

            {/* Botón para enviar el formulario */}
            <div className="button-group flex justify-center">
                <Button type="submit" className="btn btn-primary w-full h-12">
                    Add to catalogue
                </Button>
            </div>
        </form>
    );
}

export default ProductForm;
