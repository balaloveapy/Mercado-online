import { create } from "zustand";
import { Address } from "../page/address";
type States = {
    name: string,
    address: {
        street: string,
        number: string,
        complement?: string | undefined
        district: string,
        state: string,
        city: string,
    }
}
type Actions = {
    setname: (name: States["name"]) => void
    setAddres: (address: States["address"]) => void
}
const initialStates: States = {
    name: '',
    address: {
        street: '',
        number: '',
        complement: '',
        district: '',
        state: '',
        city: '',

    }
}
export const useCheckoutStore = create<States & Actions>()(set => ({
    ...initialStates,
    setname: (name) => set(state => ({ ...state, name })),
    setAddres: (address) => set(state => ({ ...state, address }))
}))