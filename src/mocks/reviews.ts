import { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id:  'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date :  '2019-05-08T14:13:56.569Z',
    user: {
      name:  'Дастин',
      avatarUrl:  'https://storage.yandexcloud.net/storage.yasno.media/nat-geo/images/2020/6/25/0fc978aba29e466e8eb4ffc946532d5e.max-1200x800.jpg',
      isPro: false
    },
    comment:  'Аяя Улюю',
    rating: 4
  },
  {
    id:  'b67ddfd5-b953-4s30-8c8d-bd083cd6b62a',
    date :  '2020-07-10T14:13:56.569Z',
    user: {
      name:  'Руслан',
      avatarUrl:  'https://blog.brilindia.com/wp-content/uploads/2015/05/Dam-Dam-Dam_1.png',
      isPro: true
    },
    comment:  'dam dam dam',
    rating: 2
  }
];
