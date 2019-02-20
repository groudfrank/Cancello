document.addEventListener('DOMContentLoaded', () => {

    var root = document.querySelector(':root');
    var login_username = document.querySelector("#login-username");
    var username_input = document.querySelector("input[name=username]");
    var username_input_dialog = document.querySelector('#username-input-dialog');
    var username_input_dialog_p = document.querySelector('#username-input-dialog p');
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
        "--global-theme-darker-contrast-color" : "#e6e6e6",
        "--global-theme-special-txt-color" : "var(--white)",
        "--global-theme-color-varied" : "rgba(255,255,255,0.8)",
        "--global-theme-negative" : "var(--primary-color)"
    }

    var darkTheme = {
        "--global-theme-color" : "#333",
        "--global-theme-contrast-color" : "#444",
        "--global-theme-darker-contrast-color" : "#222",
        "--global-theme-special-txt-color" : "var(--primary-color)",
        "--global-theme-color-varied" : "#333",
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

    username_input.addEventListener('focusout', () => {
        
        if(login_username.value == ""){
            // If field is empty.
            username_input_dialog.classList.remove('hide-me');
            username_input_dialog_p.textContent = "Field cannot be empty!";
        }

        else if(login_username.value.indexOf('@') === -1){
            // alert("Invalid Email Address");
            username_input_dialog.classList.remove('hide-me');
            username_input_dialog_p.textContent = "Not a valid email address!";
        } 

        if((login_username.value != "") || ((login_username.value.indexOf('@') !== -1))){
            username_input_dialog.classList.add('hide-me');
        } 
    });
});