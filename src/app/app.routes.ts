import { Route } from '@angular/router';
import { XhomeComponent } from './home/home.component'; // Ensure this path is correct and the file exists
import { AboutxComponent } from './about/about.component'; // Ensure this path is correct and the file exists
import { ContactxComponent } from './contact/contact.component';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    {
            path: 'home',
            component: XhomeComponent
        },
        {
            path: 'about',
            component: AboutxComponent
        },
        {
            path: 'contact',
            component: ContactxComponent
        }
];
