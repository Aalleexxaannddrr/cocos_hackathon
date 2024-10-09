export const toPriceFormat = (price: number) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 })
        .format(price)
        .replace(',', ' ');
};
