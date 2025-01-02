let submitButton = document.getElementById('submitButton');
let buttonPrint = document.getElementById('buttonPrint');

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
    displayCarts();
    // console.log(carts);
})

function displayCarts(){
    let htmlCarts = document.getElementById('carts');
    htmlCarts.innerHTML = ''; // me reset table
    carts.forEach(item => {
        htmlCarts.innerHTML += `<tr>
                        <td>${item.name}</td>
                        <td>${item.items}</td>
                        <td>${item.price}</td>
                    </tr>`
    });
}

buttonPrint.addEventListener('click', () => {
    document.querySelector('.containerForm').style.display = 'none'; // me hide form 
    buttonPrint.style.display = 'none'; // me hide print button
    window.print(); // me print page
})

window.addEventListener('afterprint', () => {
    document.querySelector('.containerForm').style.display = 'block'; // show form again
    buttonPrint.style.display = 'block'; // show print button again
});