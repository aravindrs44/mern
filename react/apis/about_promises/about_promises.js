const hunkaHunka = () =>    {
    console.log("Hunka Hunka")
}

const noMondays = new Promise( (resolve, reject) => {
        if(new Date().getDay() !== 1) {
            resolve("Good, it's not Monday!");
        } else {
            reject(hunkaHunka());
        }
    });
    noMondays
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    