document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        { food: 'Salads', wine: 'Sauvignon Blanc', price: '$18.99' },
        { food: 'Pizza', wine: 'Chianti', price: '$24.99' },
        { food: 'Chicken Alfredo', wine: 'Chardonnay', price: '$28.99' },
        { food: 'Steak', wine: 'Cabernet Sauvignon', price: '$45.99' },
        { food: 'Lamb', wine: 'Merlot', price: '$48.99' },
        { food: 'Ribs', wine: 'Zinfandel', price: '$35.99' },
        { food: 'Salmon', wine: 'Pinot Noir', price: '$39.99' },
        { food: 'Charcuterie Board', wine: 'Pinot Grigio', price: '$32.99' }
    ];

    const menuList = document.getElementById('menuList');

    menuItems.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = `
            <div class="food-item">${item.food}</div>
            <div class="wine-recommendation">Pair with: ${item.wine}</div>
            <div class="price">Price: ${item.price}</div>
        `;
        menuList.appendChild(menuItem);
    });
});
