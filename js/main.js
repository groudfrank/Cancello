document.addEventListener('DOMContentLoaded', () => {

    var root = document.querySelector(':root');
    var login_settings_btn = document.querySelector('.login-settings-btn');
    var login_settings_menu_wrapper = document.querySelector('#login-settings-menu-wrapper');
    var login_theme = document.querySelectorAll('.login-theme');
    var bg_theme = document.querySelector('.bg-theme');

    // Toggle settings menu on and off
    login_settings_btn.addEventListener('click', () => {
        if(login_settings_menu_wrapper.classList.contains('toggle-show')){
            login_settings_menu_wrapper.classList.remove('toggle-show');
            login_settings_menu_wrapper.classList.remove('no-display');
        }else{
            login_settings_menu_wrapper.classList.add('toggle-show');
            login_settings_menu_wrapper.classList.add('no-display');
        }
    });

    var changeThemeColor = (primary, secondary) => {
        root.style.setProperty('--primary-color', primary);
        root.style.setProperty('--secondary-color', secondary);
    };

    var propertyValueExtractor = (node, property) => {
        var compStyle = window.getComputedStyle(node);
        var compValue = compStyle.getPropertyValue(property);
        return compValue;
    };

    var gradientColorExtractor = (node, property) => {
        var regex = /\),/g;
        var property_string = propertyValueExtractor(node, property);
        property_string = property_string.replace(/\s|[a-z]|[A-Z]|\-/g, '');
        property_string = property_string.slice(2, -1);
        return property_string;
    };

    alert(gradientColorExtractor(bg_theme, "background-image"));

    // propertyValueExtractor(login_settings_btn, "margin");

    login_theme.forEach((el) => {
        el.addEventListener('click', () =>  {

            // var compStyle = window.getComputedStyle(el);
            // var compValue = compStyle.getPropertyValue("background-image");
            // alert(compValue);
            
            // if(el.id == 'sunset'){
                
            // }
            // if(el.id == 'plum-plate'){
            //     changeThemeColor('#667eea','#764ba2');
            // }
        })
    });
});