export const createPaymentIntent = async (amount) => {
    const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
        const errorMessage = await response.json() || 'Une erreur est survenue. Veuillez nous contacter si le problème persiste.';
        throw new Error(errorMessage.error);
    }

    return response.json();
};