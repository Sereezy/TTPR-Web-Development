function buttonAnimation(button) {
    button.classList.add('pressed');
    setTimeout(() => {
        button.classList.remove('pressed');
    }, 200);
}

function drumSound(button) {
    
}

function alertKey(key) {
    const button = document.querySelector(`.${key}.drum`);
    if (button) {
        // alert(`${key}-key was pressed!`);
        buttonAnimation(button);
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    switch (key) {
        case 'w':
        case 'a':
        case 's':
        case 'd':
        case 'j':
        case 'k':
        case 'l':
            alertKey(key);
            break;
    }
});