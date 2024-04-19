'use client'
import { Dispatch, SetStateAction } from "react"
import { Steps } from "./dialog"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from "../store/checkout-store"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const fromSchame = z.object({
    name: z.string().min(2, 'prencha seu nome')
})
type Props = {
    setstep: Dispatch<SetStateAction<Steps>>
}
export const User = ({ setstep }: Props) => {
    const { name, setname } = useCheckoutStore(state => state)

    const form = useForm<z.infer<typeof fromSchame>>({
        resolver: zodResolver(fromSchame),
        defaultValues: { name }
    })
    const onSubmit = (values: z.infer<typeof fromSchame>) => {
        console.log(values)
        setname(values.name)
        setstep('address')
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>seu nome</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Qual seu nome"
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    
                        <Button type="submit" variant={"outline"}>Proximo</Button>
                   
                </form>
            </Form>
        </div>

    )
}