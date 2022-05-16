

export function button1_click(event) {
    $w("#description").show();
    $w("#gallery").hide();
}

export function button2_click(event) {
    $w("#description").hide();
    $w("#gallery").show(); 
}