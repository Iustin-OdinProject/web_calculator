const numbers = document.querySelectorAll('.no');
const label = document.querySelector('#label_result');
const clear = document.querySelector('#clear');
const operations = document.querySelectorAll('.op');
const del = document.querySelector('#delete');

let a='';
let op = ''
let b='';
let calc=false;

label.textContent = '‎ ‎';
del.addEventListener('click', () =>
{
    if(b!='')
    {
        b=b.slice(0, -1);
        if(b=='')
            label.textContent= '‎ ‎';
        else
            label.textContent = b;
    }
    else if(op!='')
    {
        op='';
        label.textContent = a;
    }
    else if(a!='')
    {
        a=a.slice(0, -1);
        if(a=='')
            label.textContent= '‎ ‎';
        else
            label.textContent = a;
    }
    
})
clear.addEventListener('click', () => {
    a='';
    b='';
    op='';
    label.textContent = '‎ ‎';
})
operations.forEach(element => {
    element.addEventListener('click',() => {
        if(element.textContent != '=' && a!='')
        {
            label.textContent = element.textContent;
            op = element.getAttribute('id');
        }
        else
        {
            if(b!='' && a!='')
                operate(a,b,op)
        }
        
    })
});
numbers.forEach(element => {
    element.addEventListener('click', () => {
        if (calc==true && op=='')
        {
            a= '';
            b= '';
            calc=false;
        }
        if(op=='')
        {
            if(element.getAttribute('id') == 'sep')
            {
                a = a + element.textContent;
            }
            else
                a=a+element.getAttribute('id');
            label.textContent = a;
            
        }
        else
        {
            if(element.getAttribute('id') == 'sep')
            {
                b = b + element.textContent;
            }
            else
                b=b+element.getAttribute('id');
            label.textContent = b;
        }
    })
});

function operate(first,second,oper){
    switch(oper){
        case 'sum':
            label.textContent  = Number(first)+Number(second);
            a=Number(first)+Number(second);
            b='';
            op='';
            calc = true;
            break;
        case 'dif':
            label.textContent  = Number(first)-Number(second);
            a=Number(first)-Number(second)
            b='';
            op='';
            calc = true;
            break;
        case 'mult':
            label.textContent  = Number(first)*Number(second);
            a=Number(first)*Number(second);
            b='';
            op='';
            calc = true;
            break;
        case 'mod':
            if (Number(first) == 0)
                label.textContent='error';
                a='';
                b='';
                op='';
                calc = true;
                break;
            label.textContent  = Number(first)/Number(second);
            a=Number(first)/Number(second);
            b='';
            op='';
            calc = true;
            break;
    }  
}