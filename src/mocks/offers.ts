import { Offer, OfferId } from '../types/offer';

export const offers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'room',
    price: 130,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    previewImage: 'https://gls-space.ams3.digitaloceanspaces.com/lbcms-container-cz_excursions_resale/1f2ffd94-66c1-11eb-bda7-baa2e45fb9df.webp'
  },
  {
    id: '6af6f720-c28d-4121-82cd-e0b462a27f00',
    title: 'Лучшее место',
    type: 'house',
    price: 140,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.1,
    previewImage: 'https://cameralabs.org/media/lab15/post/10-15/08/samye-fotografiruemye-goroda_2.jpg'
  },
  {
    id: '6af6f720-d28d-4121-82cd-e0b462a27f00',
    title: 'Лучшее место',
    type: 'hotel',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
    previewImage: 'https://cameralabs.org/media/lab15/post/10-15/08/samye-fotografiruemye-goroda_26.jpg'
  },
  {
    id: '6af6f720-c2ad-4121-82cd-e0b462a27f00',
    title: 'Лучшее место',
    type: 'apartment',
    price: 170,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.5,
    previewImage: 'https://cdn.lifehacker.ru/wp-content/uploads/2014/12/Depositphotos_29637099_m.jpg'
  },
];

export const offersId: OfferId[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'room',
    price: 130,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
    description: 'Эх, поскорее бы лето.',
    bedrooms: 2,
    goods: [
      'Heating',
      'Washing machine',
      'Wi-Fi',
      'Cabel TV',
    ],
    host: {
      name: 'Леха Местный',
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwS944rCqReMn1UyOi67lrn00wyjxTi_YrxA&s',
      isPro: true
    },
    images: [
      'https://s1.stc.all.kpcdn.net/family/wp-content/uploads/2022/11/top-chto-takoe-apartamenty-960x540-1-960x540.jpg',
      'https://cdn0.divan.ru/img/v1/Bu4U-SiVYBlxoVAriwCq_BoyoEjZ34tsjTSVTpjG0Rw/rs:fit:1920:1440:0:0/g:ce:0:0/bg:ffffff/q:85/czM6Ly9kaXZhbi93aWtpLWFydGljbGUvNTAyNTg1Ny5qcGc.jpg',
      'https://content.cdn-cian.ru/realty/articles/content/36585/3982790.jpg',
      'https://www.palladaran.ru/uploads/images/apartamenty-v-gostinice.jpg',
      'https://valoapart.ru/upload/iblock/edd/apartments1.jpg',
      'https://cdn.mskguru.ru/uploads/news/apartamentyy-premiumklassa--lideryy-po-rostu-cen_l.jpg',
      'https://yesapart.com/upload/webp/iblock/6c9/vph3m7jctreh6fon8rpieg0l3ii92hr5.webp',
    ],
    maxAdults: 10
  },
  {
    id: '6af6f720-c28d-4121-82cd-e0b462a27f00',
    title: 'Лучшее место',
    type: 'house',
    price: 140,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.1,
    description: 'Лучшее место на сером свете.',
    bedrooms: 1,
    goods: [
      'Wi-Fi',
      'Cabel TV',
    ],
    host: {
      name: 'Игорек',
      avatarUrl: 'https://cdn-image.zvuk.com/pic?hash=986c5b54-8fcd-412e-9174-51f1a481385e&id=1236217&size=large&type=artist',
      isPro: false
    },
    images: [
      'https://s09.stc.yc.kpcdn.net/share/i/12/12168656/de-1200x900.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOWLzi6oyTXdxrSbgai3Esyvd_4Mlgk1h6HQ&s',
      'https://cdn.ruwiki.ru/commonswiki/files/thumb/d/df/%D0%94%D0%BE%D0%BC%D0%B8%D0%BA_%D0%B1%D0%BE%D0%BC%D0%B6%D0%B5%D0%B9_-_panoramio.jpg/600px-%D0%94%D0%BE%D0%BC%D0%B8%D0%BA_%D0%B1%D0%BE%D0%BC%D0%B6%D0%B5%D0%B9_-_panoramio.jpg.webp',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU64Xmkv5MdDlhiKYwcySL28mINlsqKfKBwg&s',
    ],
    maxAdults: 3
  },
  {
    id: '6af6f720-d28d-4121-82cd-e0b462a27f00',
    title: 'Лучшее место',
    type: 'hotel',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
    description: 'Мест на всех хватит.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Малхаз',
      avatarUrl: 'https://www.vokrug.tv/pic/person/d/b/d/c/dbdc1b870045d1baaf29e6cecc89b88e.jpg',
      isPro: false
    },
    images: [
      'https://cs19.pikabu.ru/s/2025/07/23/00/wi3hpoa5.jpg',
      'https://cs4.pikabu.ru/post_img/big/2014/04/16/6/1397633258_457953704.jpg',
    ],
    maxAdults: 20
  },
  {
    id: '6af6f720-c2ad-4121-82cd-e0b462a27f00',
    title: 'Лучшее место',
    type: 'apartment',
    price: 170,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.5,
    description: 'Под списком отзывов отображается карта с предложениями неподалёку. На карте отмечено 3 первых предложения неподалёку и маркер текущего предложения (итого 4 маркера). Маркеры предложений выделены синим. Маркер текущего предложения выделен оранжевым. ',
    bedrooms: 3,
    goods: [
      'Cabel TV'
    ],
    host: {
      name: 'Кекс',
      avatarUrl: 'https://avatars.dzeninfra.ru/get-zen_brief/6404829/pub_630c758c0fa48947232cb858_630c758d0fa48947232cb859/scale_1200',
      isPro: true
    },
    images: [
      'https://avatars.mds.yandex.net/get-altay/11383855/2a0000018bdd96b4c160dc4ddbd245d98f13/L_height',

    ],
    maxAdults: 1
  },
];
