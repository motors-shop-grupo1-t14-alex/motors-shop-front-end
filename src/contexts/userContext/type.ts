export interface iUserProviderProps {
    children: React.ReactNode
}

export interface iUserProviderValue {
    openOrCloseModal: () => void,
    modal: boolean
}