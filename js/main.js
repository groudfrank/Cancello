document.addEventListener('DOMContentLoaded', () => {

    var root = document.querySelector(':root');
    var login_settings_btn = document.querySelector('.login-settings-btn');
    var login_settings_menu_wrapper = document.querySelector('#login-settings-menu-wrapper');
    var color_palette = document.querySelectorAll('.color-palette');
    var visibility = document.querySelector('.visibility');

    var cssShow = {
        visibility: "visible",
        opacity: "1"
    }

    var cssHide = {
        visibility: "hidden",
        opacity: "0"
    }

    var updateProperty = (node, obj) => {

        var property_entries = Object.entries(obj);
        // console.log(property_entries);
        var property;
        var value;
        property_entries.forEach(entry => {
            property = entry[0];
            value = entry[1];
            node.style.setProperty(property, value);
        }); 
        
    }

    // Toggle settings menu on and off
    login_settings_btn.addEventListener('click', () => {
        if(login_settings_menu_wrapper.classList.contains('toggle-show')){
            login_settings_menu_wrapper.classList.remove('toggle-show');
            updateProperty(visibility, cssShow);
        }else{
            login_settings_menu_wrapper.classList.add('toggle-show');
            updateProperty(visibility, cssHide);
        }
    });

    color_palette.forEach((el) => {
        el.addEventListener('click', () =>  {

            var primary_color = gradientColorExtractor(el, 'background-image')[0];
            var secondary_color = gradientColorExtractor(el, 'background-image')[1];
            changeThemeColor(root, primary_color, secondary_color);
        })
    });
});