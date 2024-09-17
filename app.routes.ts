import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NaukaComponent } from './nauka/nauka.component';
import { SportComponent } from './sport/sport.component';
import { ZdrowieComponent } from './zdrowie/zdrowie.component';
import { TeatrComponent } from './teatr/teatr.component';
import { RozrywkaComponent } from './rozrywka/rozrywka.component';
import { NoPageComponent } from './no-page/no-page.component';
import { KinoComponent } from './kino/kino.component';

export const routes: Routes = [

    {path:"", component:HomeComponent, title:"Strona główna"},
    {path:"nauka", component:NaukaComponent, title:"Naucz się czegoś!"},
    {path:"sport", component:SportComponent, title:"Poćwicz!"},
    {path:"zdrowie", component:ZdrowieComponent, title:"Dbaj o zdrowie!"},
    {path:"rozrywka", component:RozrywkaComponent, title:"Rozrywka w Zabrzu",
        children:[
            {path:"kino",component:KinoComponent, title:"Kino"},
            {path:"teatr", component:TeatrComponent, title:"Teatr Nowy [*]"}
        ]
    },
    {path:"**", component:NoPageComponent}      // wyjątek - ZAWSZE NA KOŃCU, strona 404

];
