"use strict";

export default function welcome(msg) {
    //debugger; - если хочу отдебажить это место

    let a = 123;

    //будет только в девелопмент режиме
    if (NODE_ENV === "development") {
        console.log(msg);
    }

    console.log(`Welcome ${msg}`);
};

