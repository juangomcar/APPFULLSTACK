"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createProduct } from "./products.api"; 
import { useRouter } from "next/navigation";

interface ProductFormData {
    title: string;
    duration: string; 
    albumId: string; 
}

export function ProductForm() {
    const { register, handleSubmit, reset } = useForm<ProductFormData>(); 
    const router = useRouter();

    const onSubmit = async (data: ProductFormData) => { 
        await createProduct({
            title: data.title,
            duration: parseInt(data.duration, 10), 
            albumId: parseInt(data.albumId, 10),   
        });
        router.push("/"); 
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} className="space-y-4">
            <div className="form-group">
                <Label htmlFor="title">Song Title</Label>
                <Input
                    {...register('title')}
                    type="text"
                    id="title"
                    placeholder="Enter song title"
                    className="w-full h-10"
                    required
                />
            </div>

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

            <div className="form-group">
                <Label htmlFor="albumId">Album ID</Label>
                <Input
                    {...register('albumId', { valueAsNumber: true })} // Registramos como número
                    type="number"
                    id="albumId"
                    placeholder="Enter album ID"
                    className="w-full h-10"
                    required
                    min="1"
                />
            </div>

            <div className="button-group flex justify-center">
                <Button type="submit" className="btn btn-primary w-full h-12">
                    Add to catalogue
                </Button>
            </div>
        </form>
    );
}

export default ProductForm;
