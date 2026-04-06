import { percent, factor } from '../const';


export const getRating = (rating: number): string => (Math.round(rating) * factor).toString() + percent;
export const getDate = (date: string) => new Date(date).toLocaleString('ru-RU', {month: 'long', year: 'numeric'});
