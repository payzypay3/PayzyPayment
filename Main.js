function calculateInstallment() {
    const amount = parseFloat(document.getElementById('amount').value);
    const phone = document.getElementById('phone').value;

    // Ensure amount is valid
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Adding tax
    const taxRate = 0.115;  // 11.5% tax
    const totalWithTax = amount + (amount * taxRate);
    const installment = totalWithTax / 4; // 4 installments

    // Show installment details inside #result
    document.getElementById('result').innerHTML = `
        <p><strong>TOTAL WITH TAX:</strong> LKR. ${totalWithTax.toFixed(2)}</p>
        <p><strong>4 Monthly Payments</strong></p>
        <p>1 MONTH PAYMENT: LKR. ${installment.toFixed(2)}</p>
        <p>2 MONTH PAYMENT: LKR. ${installment.toFixed(2)}</p>
        <p>3 MONTH PAYMENT: LKR. ${installment.toFixed(2)}</p>
        <p>4 MONTH PAYMENT: LKR. ${installment.toFixed(2)}</p>
    `;

    // Show installment details div
    document.getElementById('installment-details').style.display = 'block';

    // Show checkout button
    document.getElementById('checkout').style.display = 'block';
}

function sendOrderDetails() {
    const amount = parseFloat(document.getElementById('amount').value);
    const phone = document.getElementById('phone').value;

    // Ensure the amount is valid and Koko Number is provided
    if (isNaN(amount) || amount <= 0 || !phone) {
        alert("Please fill in all fields before proceeding.");
        return;
    }

    // Adding tax
    const taxRate = 0.115;  // 11.5% tax
    const totalWithTax = amount + (amount * taxRate);
    const installment = totalWithTax / 4;

    // Construct the WhatsApp message
    const message = `
        Order Details:
        Total Amount: LKR. ${totalWithTax.toFixed(2)}
        4 Monthly Payments:
        Payment 1: LKR. ${installment.toFixed(2)}
        Payment 2: LKR. ${installment.toFixed(2)}
        Payment 3: LKR. ${installment.toFixed(2)}
        Payment 4: LKR. ${installment.toFixed(2)}
        Payzy Number: ${phone}
    `;
    
    // Encode the message to make sure special characters are handled properly
    const encodedMessage = encodeURIComponent(message.trim());

    // WhatsApp link to send the message
    const whatsappLink = `https://wa.me/94750284359?text=${encodedMessage}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
}
