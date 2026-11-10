function addGift() {
    const giftInput = document.getElementById('giftInput');
    const giftText = giftInput.value.trim();

    if (giftText === "") {
        alert('Введите название подарка!');
        return;
    }

    const giftList = document.getElementById('giftList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <div class="gift-content">
            <input type="checkbox" class="bought-checkbox" onchange="toggleBought(this)">
            <span class="gift-text">${giftText}</span>
        </div>
        <button class="delete-btn" onclick="this.parentElement.remove()">Удалить</button>
    `;
    
    giftList.appendChild(li);

    giftInput.value = "";
    giftInput.focus();
}

function toggleBought(checkbox) {
    const giftText = checkbox.nextElementSibling;
    
    if (checkbox.checked) {
        giftText.style.textDecoration = "line-through";
        giftText.style.color = "gray";
    } else {
        giftText.style.textDecoration = "none";
        giftText.style.color = "black";
    }
}
