export const company = {
    join: () => {
        console.log("Want to work with us? Go to www.wetter.com/jobs and see our open positions.")
        if (window) {
            window.open("https://www.wetter.com/jobs")
        }
    }
}

export default company;
