const setValue = (property, value) => {
    if (value) {
        document.documentElement.style.setProperty(`--${property}`, value);

        const input = document.querySelector(`#${property}`);
        if (input) {
            value = value.replace('px', '');
            input.value = value;
        }
    }
};

const setValueFromLocalStorage = property => {
    let value = localStorage.getItem(property);
    setValue(property, value);
};

const setTheme = options => {
    for (let option of Object.keys(options)) {
        const property = option;
        const value = options[option];

        setValue(property, value);
        localStorage.setItem(property, value);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setValueFromLocalStorage('color-background');
    setValueFromLocalStorage('color-text-pri');
    setValueFromLocalStorage('color-text-acc');
});

const dataThemeButtons = document.querySelectorAll('[data-theme]');

for (let i = 0; i < dataThemeButtons.length; i++) {
    dataThemeButtons[i].addEventListener('click', () => {
        const theme = dataThemeButtons[i].dataset.theme;

        switch (theme) {
            case 'blackboard':
                setTheme({
                    'color-background': '#1a1a1a',
                    'color-text-pri': '#FFFDEA',
                    'color-text-acc': '#5c5c5c'
                });
                return;

            case 'espresso':
                setTheme({
                    'color-background': '#21211F',
                    'color-text-pri': '#D1B59A',
                    'color-text-acc': '#4E4E4E'
                });
                return;

            case 'gruv':
                setTheme({
                    'color-background': '#191919',
                    'color-text-pri': '#ECDBBA',
                    'color-text-acc': '#C84B31'
                });
                return;

            case 'lime':
                setTheme({
                    'color-background': '#263238',
                    'color-text-pri': '#AABBC3',
                    'color-text-acc': '#aeea00'
                });
                return;

            case 'white':
                setTheme({
                    'color-background': '#ffffff',
                    'color-text-pri': '#222222',
                    'color-text-acc': '#dddddd'
                });
                return;

            case 'tron':
                setTheme({
                    'color-background': '#242B33',
                    'color-text-pri': '#EFFBFF',
                    'color-text-acc': '#6EE2FF'
                });
                return;

            case 'blues':
                setTheme({
                    'color-background': '#2B2C56',
                    'color-text-pri': '#EFF1FC',
                    'color-text-acc': '#6677EB'
                });
                return;

            case 'chalk':
                setTheme({
                    'color-background': '#263238',
                    'color-text-pri': '#AABBC3',
                    'color-text-acc': '#FF869A'
                });
                return;

            case 'joy':
                setTheme({
                    'color-background': '#0F0E0E',
                    'color-text-pri': '#EEEEEE',
                    'color-text-acc': '#8B9A46'
                });
                return;

        }
    })
}
