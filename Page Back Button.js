// Page Back Button


import wixWindow from 'wix-window';

import {session} from 'wix-storage';
import wixLocation from 'wix-location';

​

let previousPageURL;

$w.onReady(function () {
    previousPageURL = session.getItem("page");
    console.log(previousPageURL);
    session.setItem("page", wixLocation.url);
    $w("#BackButton").link = previousPageURL;
    $w("#BackButton").target = "_self";
});