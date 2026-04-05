import { createHeader } from './components/header.js';
import { loadAbout } from './about/about.js';
import { createFooter } from './components/footer.js';
import { createMenu } from './components/menu.js';
import { loadContacts } from './contacts/contacts.js';
import { loadPorfolio } from './porfolio/porfolio.js';
import { loadTasks } from './tasks/tasks.js';

function loadIndex() {
    console.log('Loaded main');

    const menuOptions = [
        { path: '/index.html', label: 'Inicio' },
        { path: '/porfolio/porfolio.html', label: 'Porfolio' },
        { path: '/contacts/contacts.html', label: 'Contactos' },
        { path: '/tasks/tasks.html', label: 'Tareas' },
        { path: '/about/about.html', label: 'Acerca de' },
    ];
    let page = location.pathname.split('/').at(-1).split('.').at(0);
    // page = '' ? 'index' : page
    page = page || 'index';

    const router = {
        porfolio: loadPorfolio,
        about: loadAbout,
        tasks: loadTasks,
        contacts: loadContacts,
        index: createHeader,
    };

    // switch (page) {
    //     case 'porfolio':
    //         loadPorfolio();
    //         break;
    //     case 'about':
    //         loadAbout();
    //         break;
    //     case 'contacts':
    //         loadContacts();
    //         break;
    //     default:
    //         createHeader('');
    // }

    router[page]();

    createMenu(menuOptions, 'header');
    createFooter('body');
}

loadIndex();
