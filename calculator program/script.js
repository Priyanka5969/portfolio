//box-shadow, section, form, display:flex, justify-content:center, align-items:center, box-shadow to cards, font-size:2rem, flex: 0 0 50%, display: flex;
//flex-wrap: wrap;, justify-content: space-between;

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function(butto){
        butto.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

   
    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })

;

