function gladiatorExpeses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 == 0) {
            expenses += helmetPrice;
        }
        if (i % 3 == 0) {
            expenses += swordPrice;
        }
        if (i % 6 == 0) {
            expenses += shieldPrice;
        }
        if (i % 12 == 0) {
            expenses += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpeses(23,
    12.50,
    21.50,
    40,
    200    
    )