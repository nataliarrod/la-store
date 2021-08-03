export const landingRoute = '/';
export const shopRoute = '/tienda';
export const orderRoute = '/pedido';

export const imagebanner = 'https://firebasestorage.googleapis.com/v0/b/la-store-5dcee.appspot.com/o/bannershop.png?alt=media&token=fcd0aabf-ee64-4ce6-ba50-96e84409d49c';

export const labelsNavBar = [
  {
    name: "inicio",
    url: landingRoute,
  },
  {
    name: "tienda virtual",
    url: shopRoute,
  },
  {
    name: "sobre mí",
    url: `${landingRoute}#about`,
  },
  {
    name: "contacto",
    url: `${landingRoute}#contacto`,
  },
];

const URL_IMAGES = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/la-store-5dcee.appspot.com/o/carrousel%2FbannerCursosCarrousel_opt-min.png?alt=media&token=2bc8859f-3154-4b63-8dce-40f9f9c28424",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/la-store-5dcee.appspot.com/o/carrousel%2FbannerDescuentos-min.png?alt=media&token=88c67a6d-dbb4-42d9-96d3-9aca77ec2a25",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/la-store-5dcee.appspot.com/o/carrousel%2Fbanneroraculo_opt-min.png?alt=media&token=d3fc2b37-0450-4f2b-a5cc-ffc9dab65c88",
  },
];

export const featuredProductsMockup = [
  {
    id: "1",
    name: "huevos yoni",
    price: "15000",
    url: "https://mujermexico.com/wp-content/uploads/2020/11/huevos-yoni-o-huevos-vaginales.jpg",
    maxQuantity: 5,
  },
  {
    id: "2",
    name: "anillo atlante",
    price: "90000",
    url: "https://www.meritomasa.com/3739-large_default/anillo-atlante-en-oro.jpg",
    maxQuantity: 3,
  },
  {
    id: "3",
    name: "botellas de cuarzo",
    price: "85000",
    url: "https://www.ecestaticos.com/imagestatic/clipping/3af/411/3af411fc88c073831b71b9b9cea87ae1/crees-en-los-amuletos-las-botellas-de-agua-con-cuarzos-de-oysho-son-para-ti.jpg?mtime=1612276311",
    maxQuantity: 4,
  },
  {
    id: "4",
    name: "oráculo médico",
    price: "100000",
    url: "https://firebasestorage.googleapis.com/v0/b/la-store-5dcee.appspot.com/o/cartas%20dr.png?alt=media&token=aa52ca40-4c11-467e-8b05-79d2c3169bd5",
    maxQuantity: 2,
  },
  {
    id: "5",
    name: "cuarzos",
    price: "30000",
    url: "https://cdn2.rsvponline.mx/files/rsvp/images/main/2019/gems-1400682_1280_0.jpg",
    maxQuantity: 7,
  },
  {
    id: "6",
    name: "bonsai",
    price: "250000",
    url: "https://globalnews.ca/wp-content/uploads/2019/02/gettyimages-598322873.jpg?quality=85&strip=all",
    maxQuantity: 8,
  },
  {
    id: "7",
    name: "lámpara de sal",
    price: "250000",
    url: "https://objetosdeluz.com/588-large_default/lampara-sal-natural.jpg",
    maxQuantity: 3,
  },
];

export const contactModal = {
  title: 'mensaje enviado',
  message: 'pronto nos contactaremos con usted',
}

export const deleteModal = {
  title: 'producto eliminado',
  message: 'visita nuestra para mas opciones',
}

export const taxes = [1.19];

export default URL_IMAGES;