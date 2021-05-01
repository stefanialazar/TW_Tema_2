const adauga_text = (info) => {
    const paragraf = document.createElement('p');
    paragraf.innerText = info;
    paragraf.classList.add('form');
    document.body.appendChild(paragraf);
}

const adauga_input = () => {
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.name = 'nume'
    input.classList.add('input');
    document.body.appendChild(input);
}

const adauga_select = () => {
    const sel = document.createElement('select');
    sel.classList.add('buton');
    document.body.appendChild(sel);
    sel.id = 'select';
    const fem = document.createElement('option');
    const f = 'Female';
    fem.innerText = f;
    sel.appendChild(fem);
    const male = document.createElement('option');
    const m = 'Male';
    male.innerText = m;
    sel.appendChild(male);
    const other = document.createElement('option');
    const o = 'Other';
    other.innerText = o;
    sel.appendChild(other);
}

const adauga_radio = (info) => {
    const radio = document.createElement('input');
    radio.setAttribute("type", "radio");
    radio.name = "radio";
    const text = document.createElement('span');
    text.innerText = info;
    radio.value = info;
    document.body.appendChild(radio);
    document.body.appendChild(text);
}

const adauga_submit = () => {
    const newline = document.createElement('p');
    newline.innerText = "\n";
    newline.classList.add('form');
    document.body.appendChild(newline);
    const submit = document.createElement('button');
    submit.id = 'buton';
    submit.innerText = 'Submit';
    document.body.appendChild(submit);
    submit.classList.add('buton');
}

window.onload = () => {

    adauga_text('First name');
    adauga_input();
    adauga_text('Last name');
    adauga_input();
    let afis_select = 0;
    let afis_colors = 0;
    let afis_buton = 0;

    const insert = document.getElementsByName('nume');
    insert[0].onchange = () => {
        insert[1].onchange = () => {
            if (afis_select === 0) {
                afis_select = 1;
                adauga_text('Gender');
                adauga_select();
                const select = document.getElementById('select');
                select.onchange = () => {
                    if (afis_colors === 0) {
                        afis_colors = 1;
                        adauga_text('Favourite color');
                        adauga_radio('black');
                        adauga_radio('red');
                        adauga_radio('yellow');
                        adauga_radio('orange');
                        adauga_radio('blue');
                        adauga_radio('pink');
                        const radios = document.getElementsByName('radio');

                        for (let i = 0; i < 6; i++) {
                            radios[i].onclick = () => {
                                if (afis_buton === 0) {
                                    afis_buton = 1;
                                    adauga_submit();
                                    const buton = document.getElementById('buton');

                                    buton.onclick = () => {
                                        clearTimeout(timeout); //dupa ce apasam pe buton nu mai expira sesiunea

                                        const nume1 = insert[0].value;
                                        const nume2 = document.createElement('p');
                                        nume2.innerText = nume1;

                                        const prenume1 = insert[1].value;
                                        const prenume2 = document.createElement('p');
                                        prenume2.innerText = prenume1;

                                        const select1 = select.value;
                                        const select2 = document.createElement('p');
                                        select2.innerText = select1;

                                        for (let i = 0; i < 6; i++) {
                                            if (radios[i].checked) {
                                                const radio1 = radios[i].value;
                                                const radio2 = document.createElement('p');
                                                radio2.innerText = radio1;
                                                document.body.innerHTML = ""; //stergem pagina
                                                document.body.appendChild(nume2);
                                                document.body.appendChild(prenume2);
                                                document.body.appendChild(select2);
                                                document.body.appendChild(radio2);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let timeout;
    timeout = setTimeout(() => {
        alert('Sesiunea a expirat');
        location.reload();
    }, 600000); //refresh la pagina in 10 minute
}