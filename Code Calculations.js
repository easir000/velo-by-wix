export function quantity_change(event, $w) {
    let price = Number($w('#UnitPrice').text);
    let selectedQuantity = Number(event.target.value);
     $w('#TotalPrice').text = String(selectedQuantity * price);
 }