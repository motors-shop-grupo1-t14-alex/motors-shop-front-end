export interface iConfirmationDeleteModal {
    openOrClose: () => void
    textOne: string
    textTwo: string
    title: string
    onClickCancel: React.MouseEventHandler<HTMLButtonElement>
    onClickDelete: React.MouseEventHandler<HTMLButtonElement>
    textButtonDelete: string
}