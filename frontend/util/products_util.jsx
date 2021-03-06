export const fetchAllProducts = () => (
    $.ajax({
        method: 'GET',
        url: 'api/products'
    })
);

export const fetchProduct = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/products/${id}`
    })
};