import Tooltip from './project-ui/tooltip';
import Dropdown from './project-ui/dropdown';
import Tabs from './project-ui/tabs';
<<<<<<< HEAD
import Snackbar from './project-ui/snackbar';
=======
>>>>>>> 4d0cfc8a90690b96eec4553c63fac9c8b778dac2

// create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create a dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
<<<<<<< HEAD
tabs.init();

// create snackbar
const snackbar = new Snackbar(document.querySelector('.snackbar'));
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.show('you clicked me :)');
});
=======
tabs.init();
>>>>>>> 4d0cfc8a90690b96eec4553c63fac9c8b778dac2
