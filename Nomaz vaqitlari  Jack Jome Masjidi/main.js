let date_country = document.querySelector('.date_country'),
    names1 = document.querySelector('.names1'),
    names2 = document.querySelector('.names2'),
    names3 = document.querySelector('.names3'),
    names4 = document.querySelector('.names4'),
    names5 = document.querySelector('.names5'),
    names6 = document.querySelector('.names6'),
    countName = document.querySelector('.countName'),
    btnCount = document.querySelector('.btnCount');

    fetch(`https://islomapi.uz/api/present/day?region=pop`, {
     method:'GET'
    }) 
    .then(response => response.json())
    .then((date) => {
        names1.innerHTML = date.times.tong_saharlik
        names2.innerHTML = date.times.quyosh
        names3.innerHTML = date.times.peshin
        names4.innerHTML = date.times.asr
        names5.innerHTML = date.times.shom_iftor
        names6.innerHTML = date.times.hufton
    })
    
btnCount.addEventListener('click', () =>{
    if (date_country.value == "") {
        alert("Malumot kiriting!")
    }else{
        fetch(`https://islomapi.uz/api/present/day?region=${date_country.value}`, {
        method:'GET'
       }) 
       .then(response => response.json())
       .then((date) => {
           countName.innerHTML = date.region
           names1.innerHTML = date.times.tong_saharlik
           names2.innerHTML = date.times.quyosh
           names3.innerHTML = date.times.peshin
           names4.innerHTML = date.times.asr
           names5.innerHTML = date.times.shom_iftor
           names6.innerHTML = date.times.hufton
       })
    }
   date_country.value = ""
}); 


date_country.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        btnCount.click();
    }
});