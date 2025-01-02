let submitButton = document.getElementById('submitButton');

carts = [];

submitButton.addEventListener('click', () => {
    let id; 
    if (carts.length === 0){
         id = 1;
    }
    else{
        id = carts[carts.length - 1].id + 1;
    }


    let name = document.getElementById('nameInput').value;
    let items = document.getElementById('itemInput').value;
    let price = document.getElementById('totalInput').value;
    
    let tempCart = {
        id,
        name: name,
        items: items,
        price: +price
    }
    carts.push(tempCart);
    console.log(carts);
})
console.log(submitButton);