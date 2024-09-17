let store = {
    item1: { name: "Laptop", price: 1500, quantity: 2 },
    item2: { name: "Phone", price: 800, quantity: 0 },
    item3: { name: "Monitor", price: 200, quantity: 10 },
    item4: { name: "Headphones", price: 100, quantity: 5 }
};

function updateQuantity(store){
    let fiterValues = Object.values(store).filter(item => item.quantity > 0).map(item => (({...item, totalPrice: item.quantity * item.price})))
    return [...fiterValues].sort((a,b)=> a.totalPrice - b.totalPrice)
}


console.log(updateQuantity(store))