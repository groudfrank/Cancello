document.addEventListener('DOMContentLoaded', () => {

    var root = document.querySelector(':root');
    var login_settings_btn = document.querySelector('.login-settings-btn');
    var login_settings_menu_wrapper = document.querySelector('#login-settings-menu-wrapper');
    var color_palette = document.querySelectorAll('.color-palette');
    var visibility = document.querySelector('.visibility');

    var loginWrapperShow = {
        visibility: "visible",
        opacity: "1",
        transform: "translateX(0em)"
    }

    var loginWrapperHide = {
        visibility: "hidden",
        opacity: "0",
        transform: "translateX(-3em)"
    }

    // Toggle settings menu on and off
    login_settings_btn.addEventListener('click', () => {
        if(login_settings_menu_wrapper.classList.contains('toggle-show')){
            login_settings_menu_wrapper.classList.remove('toggle-show');
            updateProperty(visibility, loginWrapperShow);
        }else{
            login_settings_menu_wrapper.classList.add('toggle-show');
            updateProperty(visibility, loginWrapperHide);
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