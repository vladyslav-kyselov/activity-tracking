export const calculateBlockActivity = (data, quantity_days) => {
    if (!data) return 0;
    console.log(data)
    const quantityPositive = data
    .reduce((prev, curr) => prev + curr.mon + curr.tue + curr.wed + curr.thu + curr.fri + curr.sat + curr.sun, 0);
const maxValue = quantity_days * data?.length;

console.log(quantityPositive, 'quantityPositive')
    return (quantityPositive / maxValue * 100).toFixed(2)
}