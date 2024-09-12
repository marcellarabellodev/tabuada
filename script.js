function tabuada(){
    let txtNum = document.getElementById('txtNum');
    let selectTab = document.getElementById('selectTab');
        
    if(txtNum.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(txtNum.value)
        let contador = 1;
        selectTab.innerHTML = ''; // para limpar a tabuada
        while (contador <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${contador} = ${n*contador}`
            selectTab.appendChild(item) // adicionar elemento filho que é o item
            contador++
        }
    }
}

function limpar() {
    // Limpa o input de número
    document.getElementById('txtNum').value = '';

    // Limpa o select
    const select = document.getElementById('selectTab');
    while (select.options.length > 1) {
        select.remove(1);
    }

    select.options[0].text = "Digite um número acima"; // Essa linha acessa a primeira opção do select (índice 0) e altera o texto dela para a mensagem padrão.
}