'use client'
import { Dispatch, SetStateAction, useEffect } from "react"
import { Steps } from "./dialog"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from "../store/checkout-store"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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
    street: z.string().min(2, 'prencha seu endereço'),
    number: z.string().min(2, 'prencha seu Numero'),
    complement: z.string().optional(),
    district: z.string().min(2, 'prencha o bairo'),
    city: z.string().min(2, 'prencha a cidade'),
    state: z.string().min(2, 'prencha o estado'),



})

type Props = {
    setstep: Dispatch<SetStateAction<Steps>>
}
export const Address = ({ setstep }: Props) => {

    const { address, setAddres } = useCheckoutStore(state => state)
    const form = useForm<z.infer<typeof fromSchame>>({
        resolver: zodResolver(fromSchame),
        defaultValues: { ...address }
    })
    const onSubmit = (values: z.infer<typeof fromSchame>) => {
        console.log(values,'ola')
        setAddres(values)
        setstep('finish')


    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="street"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bairo</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Qual seu Bairo"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Numero</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Qual seu Numero"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="complement"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Complemento</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Complemento"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="district"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Distrito</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Qual o Distrito"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cidade</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Qual a Cidade"
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        <FormField
                            control={form.control}
                            name="state"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Estado</FormLabel>
                                    <FormControl>
                                        <Select defaultValue={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Estado" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="apple">Goias</SelectItem>
                                                    <SelectItem value="banana">Df</SelectItem>
                                                    <SelectItem value="blueberry">Rio de janeiro</SelectItem>
                                                    <SelectItem value="grapes">Tocantins</SelectItem>
                                                    <SelectItem value="pineapple">Nordeste</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                    </div>
                    <div className="flex justify-between mt-6">
                        <Button type="submit" onClick={() => setstep('user')}>Voltar</Button>
                        <Button type="submit" variant={"outline"}>Proximo</Button>
                    </div>
                </form>
            </Form>
        </div>

    )
}