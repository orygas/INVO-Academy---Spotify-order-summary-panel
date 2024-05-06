export const CheckoutComponent = () => {
    const checkoutCardComponent = document.querySelector('.checkout-card-component')
    const confirmButton = document.querySelector('.btn-primary')
    const cancelButton = document.querySelector('.btn-secondary')

    let isLoading = false

    confirmButton.addEventListener('click', () => {
        confirmButton.setAttribute('data-loading', '1')
        cancelButton.setAttribute('disabled', 'disabled')

        isLoading = true

        if (isLoading) {
            console.log('The payment is already processing')

            return
        }
    })
}