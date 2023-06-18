export interface iAdvertProviderProps {
    children: React.ReactNode
}

export interface iAdvertProviderValue {
    openOrCloseAdvertModal: () => void,
    createAdvertsModal: boolean,
    brands: string[],
    createAdvertSuccessModal: () => void,
    createSuccessModal: boolean
}