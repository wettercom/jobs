import {logo} from "./logo.ts";

export const company = {
    join: () => {
        console.clear();
        console.log(logo);
        console.log(`${new Array(60).join("*")}`)
        console.log("Want to work with us? Go to https://www.wetter.com/jobs\n and see our open positions.")
        console.log(`${new Array(60).join("*")}`)
    }
}
