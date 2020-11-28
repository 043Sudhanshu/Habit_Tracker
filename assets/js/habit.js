for(let i=1;i<=30;i++){
    let m=moment().subtract(i, "days").format("MMMM Do YYYY");
    console.log((m));
}