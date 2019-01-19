document.addEventListener('DOMContentLoaded', () => {

    var root = document.querySelector(':root');
    var login_settings_btn = document.querySelector('.login-settings-btn');
    var login_settings_menu_wrapper = document.querySelector('#login-settings-menu-wrapper');
    var color_palette = document.querySelectorAll('.color-palette');
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
        property_string = property_string.replace('),(',') (');
        property_string_array = property_string.split(" ");
        property_string_array[0] = 'rgb' + property_string_array[0]; 
        property_string_array[1] = 'rgb' + property_string_array[1]; 
        return property_string_array;
    };

    

    color_palette.forEach((el) => {
        el.addEventListener('click', () =>  {

            var primary_color = gradientColorExtractor(el, 'background-image')[0];
            var secondary_color = gradientColorExtractor(el, 'background-image')[1];
            changeThemeColor(primary_color, secondary_color);
        })
    });
});