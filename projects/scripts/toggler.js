function toggle(event, TheBtn) {
    const toggleElement1 = document.querySelector('.js-gaming').classList;
    const toggleElement2 = document.querySelector('.js-music').classList;
    const toggleElement3 = document.querySelector('.js-tech').classList;

    let flag1 = null;
    let flag2 = false;
    let flag3 = false;
    if (event.type) {
        if (TheBtn === 'Gaming') {
            toggleElement1.add('toggled');
            flag1 = true;

        } else if (TheBtn === 'Music') {
            toggleElement2.add('toggled');
            flag2 = true;

        } else if (TheBtn === 'Tech') {
            toggleElement3.add('toggled');
            flag3 = true;

        } 
        
        if (toggleElement1.contains('toggled') && flag1) {
            toggleElement2.remove('toggled');
            toggleElement3.remove('toggled');
        } if (toggleElement2.contains('toggled') && flag2) {
            toggleElement3.remove('toggled');
            toggleElement1.remove('toggled');
        } if (toggleElement3.contains('toggled') && flag3) {
            toggleElement1.remove('toggled');
            toggleElement2.remove('toggled');
        }
        }
    } 


//Todo : Use event.value after completing previous task

