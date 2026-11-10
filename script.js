const GIFT_PRICE = 1000; 

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
        <button class="delete-btn" onclick="removeGift(this)">Удалить</button>
    `;
    
    giftList.appendChild(li);

    giftInput.value = "";
    giftInput.focus();
    
    updateBudget(); 
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

function removeGift(button) {
    button.parentElement.remove();
    updateBudget();
}

function updateBudget() {
    const totalBudget = Number(document.getElementById('budgetInput').value) || 0;
    const giftCount = document.querySelectorAll('#giftList li').length;
    
    const spent = giftCount * GIFT_PRICE; 
    const balance = totalBudget - spent;

    document.getElementById('spentAmount').innerText = spent;
    
    const balanceElement = document.getElementById('balanceAmount');
    balanceElement.innerText = balance;

    if (balance < 0) {
        balanceElement.style.color = '#e74c3c';
    } else {
        balanceElement.style.color = 'green';
    }
}
