$(document).ready(function () {
    $('#int-btn-group button').on('click', function () {
        var thisBtn = $(this);
        thisBtn.addClass('active').siblings().removeClass('active');
        var btnText = thisBtn.text();
        var btnValue = thisBtn.val();

        $('#selected_int').val(btnValue);
    });

});

function calc(event) {
    event.preventDefault();
    var ammount = document.getElementById('price_txt').innerHTML; // ammount
    var down = document.getElementById("down_txt").innerHTML;; // down
    var time = document.getElementById("morg_txt"); // time
    var rate = $('#selected_int').val(); // int
    var ans = document.getElementById("inst_txt"); // answer
    ammount = Number(ammount.replace(/[^0-9.-]+/g, ""));
    down = Number(down.replace(/[^0-9.-]+/g, ""));
    // reducing downpayment from total
    let totl_ammount = ammount - down
    // calculate total intrest =  total-int = int-rate / 100 * ammount * time
    let total_int = calc_total_int(totl_ammount, time.value, rate);
    // calculate monthly installment = monthly-inst = (ammount + total-int) / (time * 12)
    let monthly_inst = calc_monthly_pay(totl_ammount, total_int, time.value);
    // set text on front end
    ans.innerHTML = monthly_inst.toLocaleString('en') + "฿";
    return false;   // The function returns the product of p1 and p2
}

function setDown(value) {
    let price = document.getElementById("price_txt").innerHTML;
    price = Number(price.replace(/[^0-9.-]+/g, ""));
    var down_txt = document.getElementById("down_txt");
    let ans = (value * price);
    down_txt.innerHTML = ans.toLocaleString('en');
}



function calc_total_int(ammount, time, rate) {
    console.log({ ammount: ammount, time: time, rate: rate });
    let ans = rate / 100 * ammount * time;
    console.log("total int : ", ans);
    return ans;
}

function calc_monthly_pay(ammount, total_int, time) {
    console.log({ ammount: ammount, int: total_int, time: time });
    let ans = (ammount + total_int) / (time);
    console.log("monthly payment : ", ans);
    return ans;
}

function convertToCurr(x) {
    return Number(i).toLocaleString('en');
}
