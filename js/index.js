
let num = prompt('0 мен 99 арасындағы санды енгізіңіз:')
if(num >= 0 && num <= 9) {
    alert('Сан:' + num)
}else if(num >= 10 && num <= 99) {
  let Num1 = prompt(num / 10);
  let Num2 = Math.floor(num % 10)
    alert('Бірінші сан:' + Num1 + '\n' + 'Екінші сан:' + Num2);
}else{
    alert('Тек 0 мен 99 арасындағы санды енгізіңіз.');
}





