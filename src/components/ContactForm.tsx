"use client"

import { useState } from "react";
import { NewContactSchema, NewContactType, SERVICOS_OPTIONS } from "@/schemas/contact-schema";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { IMaskInput } from "react-imask";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [serverMessage, setServerMessage] = useState("");

    const form = useForm<NewContactType>({
        resolver: zodResolver(NewContactSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            phone: "",
            servico: undefined,
            message: "",
            acceptedTerms: false,
        }
    })

    const onSubmit = async (data: NewContactType) => {
        setStatus("loading");
        setServerMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus("success");
                setServerMessage(result.message);
                form.reset();
            } else {
                setStatus("error");
                setServerMessage(result.message ?? "Algo deu errado. Tente novamente.");
            }
        } catch {
            setStatus("error");
            setServerMessage("Não foi possível conectar ao servidor. Verifique sua internet e tente novamente.");
        }
    }

    const isLoading = status === "loading";

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-3xl flex flex-col gap-3 md:gap-6 p-6 border rounded-lg shadow-lg shadow-zinc-500"
            >
                {/* Name and Surname */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <FormField
                        name="name"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Nome *</FormLabel>
                                <FormControl>
                                    <Input placeholder="Digite seu nome." disabled={isLoading} {...field} />
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
                                    <Input placeholder="Digite seu sobrenome." disabled={isLoading} {...field} />
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
                                <Input placeholder="Digite seu email." disabled={isLoading} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Phone + Servico */}
                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <FormField
                        name="phone"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Telefone *</FormLabel>
                                <FormControl>
                                    <IMaskInput
                                        mask="(00) 00000-0000"
                                        disabled={isLoading}
                                        value={field.value}
                                        onAccept={(value: string) => field.onChange(value)}
                                        onBlur={field.onBlur}
                                        name={field.name}
                                        inputRef={field.ref}
                                        placeholder="(11) 99999-9999"
                                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        name="servico"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Serviço de interesse *</FormLabel>
                                <Select disabled={isLoading} onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Selecione um serviço" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {SERVICOS_OPTIONS.map((s) => (
                                            <SelectItem key={s} value={s}>{s}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Message */}
                <FormField
                    name="message"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>Mensagem</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Como podemos ajudar com o seu seguro hoje?" disabled={isLoading} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Terms */}
                <FormField
                    name="acceptedTerms"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem className="flex flex-col gap-2">
                            <FormControl>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        disabled={isLoading}
                                        className="border-zinc-700"
                                    />
                                    <span className="text-sm text-zinc-700">
                                        Li e concordo com os
                                        <a href="/termos-de-uso" className="font-semibold hover:underline"> Termos de Uso </a>
                                        e com a <a href="/politica-de-privacidade-e-cookies" className="font-semibold hover:underline">Política de Privacidade</a>.
                                    </span>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit */}
                <Button
                    type="submit"
                    disabled={!form.watch("acceptedTerms") || isLoading}
                    className="w-full px-4 py-2 bg-primary-foreground text-white rounded hover:bg-primary-foreground/80 cursor-pointer transition-colors duration-300"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Enviando...
                        </>
                    ) : (
                        <>
                            <Send className="h-4 w-4" />
                            Enviar Mensagem
                        </>
                    )}
                </Button>

                {/* Feedback de sucesso */}
                {status === "success" && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                        <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                        <p className="text-sm font-medium">{serverMessage}</p>
                    </div>
                )}

                {/* Feedback de erro */}
                {status === "error" && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                        <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                        <p className="text-sm font-medium">{serverMessage}</p>
                    </div>
                )}
            </form>
        </Form>
    )
}

export default ContactForm;
