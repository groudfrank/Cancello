document.addEventListener('DOMContentLoaded', () => {

    var root = document.querySelector(':root');
    var loginUsername = document.querySelector("#login-username");
    var usernameInput = document.querySelector("input[name=username]");
    var usernameInputDialogWrapper = document.querySelector('#username-input-dialog');
    var usernameInputDialog = document.querySelector('#username-input-dialog p');
    var loginSettingsBtn = document.querySelector('.login-settings-btn');
    var loginSettingsMenuWrapper = document.querySelector('#login-settings-menu-wrapper');
    var colorPalette = document.querySelectorAll('.color-palette');
    var globalThemeToggleWrapper = document.querySelector('.global-theme-toggle-wrapper');
    var globalThemeToggle = document.querySelector('.global-theme-toggle');
    var visibility = document.querySelector('.visibility');
    var emailRegex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"

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
    loginSettingsBtn.addEventListener('click', () => {
        if(loginSettingsMenuWrapper.classList.contains('toggle-show')){
            loginSettingsMenuWrapper.classList.remove('toggle-show');
            updateProperty(visibility, loginWrapperShow);
        }else{
            loginSettingsMenuWrapper.classList.add('toggle-show');
            updateProperty(visibility, loginWrapperHide);
        }
    });

    colorPalette.forEach((el) => {
        el.addEventListener('click', () =>  {
            var primary_color = gradientColorExtractor(el, 'background-image')[0];
            var secondary_color = gradientColorExtractor(el, 'background-image')[1];
            changeThemeColor(root, primary_color, secondary_color);
        })
    });

    const toggle_btn = globalThemeToggle.style.marginLeft;

    globalThemeToggleWrapper.addEventListener('click', () => {
        if(globalThemeToggleWrapper.classList.contains('toggle-off')){
            globalThemeToggleWrapper.classList.remove('toggle-off');
            globalThemeToggle.style.setProperty('margin-left', '0em');
            updateProperty(root, lightTheme);
        }else{
            globalThemeToggleWrapper.classList.add('toggle-off');
            globalThemeToggle.style.setProperty('margin-left', toggle_btn);
            updateProperty(root, darkTheme);
        }
    });

    usernameInput.addEventListener('focusout', () => {
        
        // if field is empty.
        if(loginUsername.value == ""){
            usernameInputDialogWrapper.classList.remove('hide-me');
            usernameInputDialog.textContent = "Field cannot be empty!";
        }

        // if email address format is invalid
        // else if(loginUsername.value.indexOf('@') === -1){
        //     usernameInputDialogWrapper.classList.remove('hide-me');
        //     usernameInputDialog.textContent = "Not a valid email address!";
        // } 

        // else{
        //     usernameInputDialogWrapper.classList.add('hide-me');
        // }
    });
});