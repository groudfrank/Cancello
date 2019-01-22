document.addEventListener('DOMContentLoaded', () => {

    var root = document.querySelector(':root');
    var login_settings_btn = document.querySelector('.login-settings-btn');
    var login_settings_menu_wrapper = document.querySelector('#login-settings-menu-wrapper');
    var color_palette = document.querySelectorAll('.color-palette');
    var global_theme_toggle_wrapper = document.querySelector('.global-theme-toggle-wrapper');
    var global_theme_toggle = document.querySelector('.global-theme-toggle');
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

    var lightTheme = {
        "--global-theme-color" : "#fff",
        "--global-theme-contrast-color" : "#f5f5f5",
        "--global-theme-darker-contrast-color" : "#dcdcdc",
        "--global-theme-special-txt-color" : "var(--white)",
        "--global-theme-negative" : "var(--primary-color)"
    }

    var darkTheme = {
        "--global-theme-color" : "#333",
        "--global-theme-contrast-color" : "#444",
        "--global-theme-darker-contrast-color" : "#222",
        "--global-theme-special-txt-color" : "var(--primary-color)",
        "--global-theme-negative" : "#fff"
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

    const toggle_btn = global_theme_toggle.style.marginLeft;

    global_theme_toggle_wrapper.addEventListener('click', () => {
        if(global_theme_toggle_wrapper.classList.contains('toggle-off')){
            global_theme_toggle_wrapper.classList.remove('toggle-off');
            global_theme_toggle.style.setProperty('margin-left', '0em');
            updateProperty(root, lightTheme);
        }else{
            global_theme_toggle_wrapper.classList.add('toggle-off');
            global_theme_toggle.style.setProperty('margin-left', toggle_btn);
            updateProperty(root, darkTheme);
        }
    });
});