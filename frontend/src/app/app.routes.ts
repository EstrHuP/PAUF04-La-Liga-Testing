import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { TeamsPage } from './features/teams/pages/teams-page/teams-page';
import { ResultsPage } from './features/results/pages/results-page/results-page';
import { ClasificationsPage } from './features/clasifications/pages/clasifications-page/clasifications-page';
import { PlayerPage } from './features/players/pages/players-page/players-page';
import { RefereesPage } from './features/referees/pages/referees-page/referees-page';
import { ContactPage } from './features/contact/pages/contact-page/contact-page';
import { Login } from './shared/components/login/login';
import { Register } from './shared/components/register/register';
import { ArbitroPage } from './features/dashboard/pages/arbitro-page/arbitro-page';
import { CapitanPage } from './features/dashboard/pages/capitan-page/capitan-page';
import { UsuarioPage } from './features/dashboard/pages/usuario-page/usuario-page';
import { AdminPage } from './features/dashboard/pages/admin-page/admin-page';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component: HomePage },
 
    // PAGES
    { path:'teams', component: TeamsPage },
    { path:'results', component: ResultsPage },
    { path:'clasifications', component: ClasificationsPage },
    { path:'players', component: PlayerPage },
    { path:'referees', component: RefereesPage },
    { path:'contact', component: ContactPage },

    // INDEX
    { path:'index_admin', component: AdminPage },
    { path:'index_arbitro', component: ArbitroPage },
    { path:'index_capitan', component: CapitanPage },
    { path:'index_usuario', component: UsuarioPage },

    // AUTH
    { path:'login', component: Login },
    { path:'register', component: Register }
];
