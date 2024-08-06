document.addEventListener('DOMContentLoaded', () => {
    const popularWines = [
        { name: 'Wine A', type: 'Red', image: 'image_url_1', description: 'Description of Wine A' },
        { name: 'Wine B', type: 'White', image: 'image_url_2', description: 'Description of Wine B' },
        { name: 'Wine C', type: 'Red', image: 'image_url_3', description: 'Description of Wine C' },
        { name: 'Wine D', type: 'White', image: 'image_url_4', description: 'Description of Wine D' },
        { name: 'Wine E', type: 'Red', image: 'image_url_5', description: 'Description of Wine E' },
        { name: 'Wine F', type: 'White', image: 'image_url_6', description: 'Description of Wine F' },
        { name: 'Wine G', type: 'Red', image: 'image_url_7', description: 'Description of Wine G' },
        { name: 'Wine H', type: 'White', image: 'image_url_8', description: 'Description of Wine H' },
        { name: 'Wine I', type: 'Red', image: 'image_url_9', description: 'Description of Wine I' },
        { name: 'Wine J', type: 'White', image: 'image_url_10', description: 'Description of Wine J' }
    ];

    const midLevelWines = [
        { name: 'Wine K', type: 'Red', image: 'image_url_11', description: 'Description of Wine K' },
        { name: 'Wine L', type: 'White', image: 'image_url_12', description: 'Description of Wine L' },
        { name: 'Wine M', type: 'Red', image: 'image_url_13', description: 'Description of Wine M' },
        { name: 'Wine N', type: 'White', image: 'image_url_14', description: 'Description of Wine N' },
        { name: 'Wine O', type: 'Red', image: 'image_url_15', description: 'Description of Wine O' },
        { name: 'Wine P', type: 'White', image: 'image_url_16', description: 'Description of Wine P' },
        { name: 'Wine Q', type: 'Red', image: 'image_url_17', description: 'Description of Wine Q' },
        { name: 'Wine R', type: 'White', image: 'image_url_18', description: 'Description of Wine R' },
        { name: 'Wine S', type: 'Red', image: 'image_url_19', description: 'Description of Wine S' },
        { name: 'Wine T', type: 'White', image: 'image_url_20', description: 'Description of Wine T' }
    ];

    function displayWines(wineList, containerId) {
        const container = document.getElementById(containerId);
        wineList.forEach(wine => {
            const wineCard = document.createElement('div');
            wineCard.className = 'wine-card';

            const wineImage = document.createElement('img');
            wineImage.src = wine.image;
            wineImage.alt = `${wine.name} image`;

            const wineName = document.createElement('h3');
            wineName.textContent = wine.name;

            const wineType = document.createElement('p');
            wineType.textContent = `Type: ${wine.type}`;

            const wineDescription = document.createElement('p');
            wineDescription.textContent = wine.description;

            wineCard.appendChild(wineImage);
            wineCard.appendChild(wineName);
            wineCard.appendChild(wineType);
            wineCard.appendChild(wineDescription);

            container.appendChild(wineCard);
        });
    }

    displayWines(popularWines, 'popularWinesList');
    displayWines(midLevelWines, 'midLevelWinesList');
});
