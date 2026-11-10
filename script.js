function addGift() {
    const giftInput = document.getElementById('giftInput');
    const giftText = giftInput.value.trim();

    if (giftText === "") {
        alert('Введите название подарка!');
        return;
    }

    const giftList = document.getElementById('giftList');
    const li = document.createElement('li');
    
    // Создаем элемент списка
    li.innerHTML = `
        <span>${giftText}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">Удалить</button>
    `;
    
    giftList.appendChild(li);

    // Очищаем поле ввода
    giftInput.value = "";
    giftInput.focus();
}
