import { RecipeDetail } from '../../../interfaces';

const recipe: RecipeDetail = {
    id: 'testid',
    name: 'Name',
    description: 'Description',
    // tslint:disable:max-line-length
    image: 'https://media.cntraveler.com/photos/59ca6488e11975084c5841ea/master/pass/Federal_160415_FEDERALdonuts64786.jpg',
    steps: [
        { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae accumsan sem. Phasellus tristique justo orci, condimentum euismod velit bibendum vitae. Mauris dictum semper sagittis.' },
        { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum rhoncus ante, at dignissim ex condimentum quis. Donec massa felis, commodo fringilla dapibus nec, sollicitudin sed ante. Donec a ante aliquet, viverra arcu sit amet, lobortis orci. Aenean suscipit et.' },
        { description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae accumsan sem. Phasellus tristique justo orci, condimentum euismod velit bibendum vitae. Mauris dictum semper sagittis.' },
        { description: 'Lorem ipsum dolor sit amet.' },
    ]
};

export default recipe;