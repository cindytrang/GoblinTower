const container = document.getElementById('animation-container');
const heroImage = container.querySelector('.character-image');
const goblinImage = container.querySelector('.goblin-image');
let yPosition = 0;
let yVelocity = 0;
const gravity = 0.5;
const jumpStrength = 10;

function animateHero() {
    yVelocity += gravity;
    yPosition += yVelocity;

    const maxYPosition = container.clientHeight - heroImage.clientHeight;

    if (yPosition >= maxYPosition) {
        yPosition = maxYPosition;
        yVelocity = 0;
    }

    if (yPosition < 0) {
        yPosition = 0;
        yVelocity = 0;
    }

    heroImage.style.top = yPosition + 'px';

    requestAnimationFrame(animateHero);
}

function jump() {
    if (yPosition >= container.clientHeight - heroImage.clientHeight) {
        yVelocity = -jumpStrength;
    }
    document.getElementById("takeStepButton").click();
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump(); 
    }
});

function displayImage(imageName, alt, x, y, width, height) {
    const img = document.createElement('img');
    img.src = `images/${imageName}`;
    img.alt = alt;
    img.style.position = 'absolute';
    img.style.left = x + 'px';
    img.style.top = y + 'px';
    img.style.width = width + 'px';
    img.style.height = height + 'px';
    container.appendChild(img);
    return img;
}

function showDamageIcon(x, y) {
    const damageIcon = displayImage('damage.png', 'Damage Icon', x, y, 40, 40);
    setTimeout(() => {
        container.removeChild(damageIcon);
    }, 1000);
}

function showPotionIcon(x, y) {
    const damageIcon = displayImage('potion.png', 'Damage Icon', x, y, 10, 10);
}

function showShieldIcon(x, y) {
    const damageIcon = displayImage('shield.png', 'Damage Icon',  x, y, 10, 10);
}

function showSwordIcon(x, y) {
    const damageIcon = displayImage('sword.png', 'sword Icon', x, y, 10, 10);
}

function showGoblin() {
    goblinImage.style.display = 'block';
}

function hideGoblin() {
    goblinImage.style.display = 'none';
}

function updateInventoryDisplay(hero) {
    const inventoryContainer = document.getElementById('inventory-container');
    inventoryContainer.innerHTML = '<h3>Inventory</h3>';

    const itemsToDisplay = [
        { name: 'Potion', count: hero.potions, iconSrc: 'potion.png' },
        { name: 'Shield', count: hero.defence, iconSrc: 'shield.png' },
        { name: 'Sword', count: hero.luck, iconSrc: 'sword.png' }  // Assuming sword count is based on luck
    ];

    itemsToDisplay.forEach((item) => {
        if (item.count > 0) {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'inventory-item';
            
            const iconImg = document.createElement('img');
            iconImg.src = `images/${item.iconSrc}`;
            iconImg.alt = `${item.name} Icon`;
            iconImg.className = 'inventory-icon';
            
            const nameSpan = document.createElement('span');
            nameSpan.className = 'item-name';
            nameSpan.textContent = item.name;

            const countSpan = document.createElement('span');
            countSpan.className = 'item-quantity';
            countSpan.textContent = `x${item.count}`;
            
            itemDiv.appendChild(iconImg);
            itemDiv.appendChild(nameSpan);
            itemDiv.appendChild(countSpan);
            inventoryContainer.appendChild(itemDiv);
        }
    });
}

animateHero();