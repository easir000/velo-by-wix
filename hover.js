// fade an image on hover



$w.onReady(function () {
    $w('#ExampleImage').onMouseIn( (Event) => {
      let fadeOptions = {
        "duration":   500,
        "delay":      500
      };
      $w("#ExampleImage").hide("fade", fadeOptions);
    } );
  } );
  
  ​
  
  export function ExampleBox_mouseOut(event) {
    let fadeOptions = {
      "duration":   500,
      "delay":      500
    };
    $w("#ExampleImage").show("fade", fadeOptions);
  }