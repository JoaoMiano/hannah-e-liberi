"use client"

import { NewContactSchema, NewContactType } from "@/schemas/newContactSchema";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const ContactForm = () => {
    const form = useForm<NewContactType>({
        resolver: zodResolver(NewContactSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            phone: "",
            message: "",
        }
    })

    const onSubmit = (data: NewContactType) => {
        console.log(data)
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-3xl flex flex-col gap-3 md:gap-6 p-6 border rounded-lg shadow-lg shadow-zinc-500"
            >
                {/* Name and Surname*/}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Nome *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite seu nome." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="surname"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Sobrenome *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite seu sobrenome." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                {/* Email */}
                <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu email." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Phone */}
                <FormField
                    name="phone"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>Telefone *</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite seu telefone." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Como podemos ajudar com o seu seguro hoje?" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <div>
                    <Button
                        type="submit"
                        className="w-full px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/80 cursor-pointer transition-colors duration-300 "
                    >
                       <Send /> Enviar Mensagem
                    </Button>
                </div>
            </form>
        </Form >
    )
}

export default ContactForm;