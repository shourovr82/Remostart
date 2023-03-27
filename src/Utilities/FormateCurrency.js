const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency',
});

export default function formatCurrency(number) {
    const parsedNumber = parseFloat(number);
    return currencyFormatter.format(parsedNumber);
}
