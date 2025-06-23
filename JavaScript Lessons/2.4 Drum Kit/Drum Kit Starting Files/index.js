document.querySelectorAll('drum').forEach(element => {
    element.addEventListener('click', function(){
        this.style.Color = 'orange';
        let key = this.className.split(' ')[0];
        function alertKey(string){
            alert(`${string}-key was pressed!`)
        }
        switch (situation){
            case 'w':
                alertKey('w')
            case 'a':
                alertKey('a')
            case 's':
                alertKey('s')
            case 'd':
                alertKey('d')
            case 'j':
                alertKey('j')
            case 'k':
                alertKey('k')
            case 'l':
                alertKey('l')
        }
    })
})
