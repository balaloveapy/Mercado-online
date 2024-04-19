'use client'
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { User } from "./stepUser"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Address } from "./address"
import { Finish } from "./finish"
export type Steps = 'user' | 'address' | 'finish'
type boolea = {
    valor: boolean
    setValor: (open: boolean) => void
}
export function CheckDialog({ valor, setValor }: boolea) {
    const [step, setStep] = useState<Steps>('user')
    let progressNumber = 0
    switch (step) {
        case 'user': progressNumber = 30
            break;
        case 'address': progressNumber = 70
            break;
        case 'finish': progressNumber = 100
            break;

    }
    return (
        <Dialog open={valor} onOpenChange={setValor}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados Pessoais'}
                        {step === 'address' && 'Endereço de entrega'}
                        {step === 'finish' && 'Envio para o whatsApp'}
                    </DialogTitle>

                    <Progress value={progressNumber} />
                    <div>
                        {step === 'user' && <User setstep={setStep} />}
                        {step === 'address' && <Address setstep={setStep} />}
                        {step === 'finish' && <Finish/>}
                    </div>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}