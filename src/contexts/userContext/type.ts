export interface iAdvertProviderProps {
    children: React.ReactNode
}

export interface iAdvertProviderValue {
    openOrCloseModal: () => void,
    createAdvertsModal: boolean,
    brands: string[]
}