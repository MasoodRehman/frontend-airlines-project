import { State } from '@ngxs/store';
import { AppStateModel } from './models/app.state.model';

@State<AppStateModel>({
    name: 'app',
    defaults: new AppStateModel()
})

export class AppState {

    constructor(){}
    

}