import RecipeStep from './RecipeStep';

export default interface RecipeDetail {
    id: string;
    name: string;
    description: string;
    image: string;
    steps: RecipeStep[];
}