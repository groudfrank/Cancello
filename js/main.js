document.addEventListener('DOMContentLoaded', () => {

    var root = document.querySelector(':root');
    var login_settings_btn = document.querySelector('.login-settings-btn');
    var login_settings_menu_wrapper = document.querySelector('#login-settings-menu-wrapper');
    var login_theme = document.querySelectorAll('.login-theme');

    // Toggle settings menu on and off
    login_settings_btn.addEventListener('click', (e) => {
        if(login_settings_menu_wrapper.classList.contains('toggle-show')){
            login_settings_menu_wrapper.classList.remove('toggle-show');
            login_settings_menu_wrapper.classList.remove('no-display');
        }else{
            login_settings_menu_wrapper.classList.add('toggle-show');
            login_settings_menu_wrapper.classList.add('no-display');
        }
    });

    alert(window.getComputedStyle(login_settings_btn.getPropertyValue("margin")));

    var changeThemeColor = (primary, secondary) => {
        root.style.setProperty('--primary-color', primary);
        root.style.setProperty('--secondary-color', secondary);
    };

    login_theme.forEach((el) => {
        el.addEventListener('click', (e) =>  {

            alert(el.style.width);
            
            // if(el.id == 'sunset'){
                
            // }
            // if(el.id == 'plum-plate'){
            //     changeThemeColor('#667eea','#764ba2');
            // }
        })
    });
});