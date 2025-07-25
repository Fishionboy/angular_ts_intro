// interfaces
interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// products
const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

interface TaxCalculationOptions{
    tax:number,
    products: Product[];
}

// Functions
function taxCalculation(options : TaxCalculationOptions  ):number[]{
    const {products,tax}=options;
    let total=0;

    products.forEach( ({price}) =>{
       
        total += price; 
    });

    return [total, total * tax]

}

const shoppingCard = [phone,tablet];
const tax = 0.15;

const [totalFinal,taxFinal] = taxCalculation({
    products:shoppingCard,
    tax:tax
})

console.log('Total',totalFinal);
console.log('Tax',taxFinal);

export{}




//ENUNCIADO ORIGINAL destructura
// // interfaces
// interface Product {
//     description: string;
//     price: number;
// }

// interface TaxCalculationOptions {
//     tax: number;
//     products: Product[];
// }

// // products
// const phone: Product = {
//     description: "Nokia A1",
//     price: 150.0
// }

// const tablet: Product = {
//     description: "iPad Air",
//     price: 250.0
// }

// interface TaxCalculationOptions{
//     tax:number,
//     products: Product[];
// }

// // Functions
// function taxCalculation(options : TaxCalculationOptions  ):number[]{
//     let total=0;
//     options.products.forEach( product =>{
//         total += product.price;
//     });

//     return [total, total *options.tax]

// }

// const shoppingCard = [phone,tablet];
// const tax = 0.15;

// const result = taxCalculation({
//     products:shoppingCard,
//     tax:tax
// })

// console.log('Total',result[0]);
// console.log('Tax',result[1]);

// export{}


