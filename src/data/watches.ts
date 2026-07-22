
export interface Watch {
  id: string;
  title: string;
  category: string;
  image: string;
  waMessage: string;
  galleryImages?: string[];
}

export const watches: Watch[] = [
  {
    id: 'edifice',
    title: 'Edifice',
    category: 'Línea de acero',
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508797/edefice1_gzc3qa.avif',
    waMessage: 'Hola Cuore, quería consultar por relojes Casio Edifice',
    galleryImages: [
      '/casioedifice/3A5ECCD1-CEF6-4037-807D-CCD0AFB112AB.png',
      '/casioedifice/41CF0FFF-0BA3-44AE-8C9F-31BC0532DE77.png',
      '/casioedifice/57C4AC41-4AE1-4710-83E5-02922A708F20.png',
      '/casioedifice/7C1289FC-8866-470D-B196-3145CE8CA90F.png',
      '/casioedifice/8B973CB2-8C52-408A-951C-EE4BFD9090E4.png',
      '/casioedifice/94E52906-D642-4494-A3C5-C122F16A1955.png',
      '/casioedifice/DD8DDBA8-382F-4A06-B7D2-6BE4E3EB16B6.png',
      '/casioedifice/F0850579-90C9-43A4-8F11-3FB9A7DB9810.png'
    ]
  },
  {
    id: 'vintage',
    title: 'Vintage',
    category: 'Clásicos retro',
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508794/clasico_b9c6rp.avif',
    waMessage: 'Hola Cuore, quería consultar por relojes retro/vintage',
    galleryImages: [
      '/Casio clasico/4ADF7D4D-A83A-46D9-8D8E-D4C62BF04D67.png',
      '/Casio clasico/6A3BC9A9-43CE-43DC-82A7-95A5DC9197C3.png',
      '/Casio clasico/7FE93EAA-2C31-40C7-B1BA-70A36544A3FF.png',
      '/Casio clasico/84FB8E98-DD8A-4707-981B-7F4237623946.png',
      '/Casio clasico/A2E8D8D5-1829-4491-905D-8C5B0D08F41D.png',
      '/Casio clasico/B1501ED4-CAFE-4976-A017-138D5830BA28.png',
      '/Casio clasico/B731B0BB-5DFD-4C19-B4CF-0F6F60E1F30C.png',
      '/Casio clasico/CASIOMTP-1141A-7A.png',
      '/Casio clasico/CasioMTP-1303D-1A.png',
      '/Casio clasico/D3A4E846-BAE4-4BC4-B215-28971D9B3660.png',
      '/Casio clasico/D9F20DA5-B5F5-47A9-87EC-FA3BDACFDF90.png',
      '/Casio clasico/MTP-V002SG-9A.png',
      '/Casio clasico/casio-ltp-1128.png'
    ]
  },
  {
    id: 'gshock',
    title: 'G-Shock',
    category: 'Alta resistencia',
    image: 'https://res.cloudinary.com/dsdb4fibv/image/upload/v1782508796/gshock_twz9qg.avif',
    waMessage: 'Hola Cuore, quería consultar por modelos G-Shock',
    galleryImages: [
      '/gshock/00837460-C531-4503-B92D-C32A958BB402.png',
      '/gshock/1232A15E-B544-4B5B-8402-E0CE9950DBCF.png',
      '/gshock/1E83DE0D-52F5-4C48-B746-7CDDB3A81DF4.png',
      '/gshock/4981FF99-9BC0-46C8-8410-E9CC3FA09270.png',
      '/gshock/5EE1FE7F-0415-47C3-83F4-A70E061D5CE6.png',
      '/gshock/6FE90D62-3A1D-4A59-89F5-110522E69C91.png',
      '/gshock/7251C2EE-274B-492A-A3D6-0F6BF654A6BF.png',
      '/gshock/75FC170B-4AE1-4846-956F-6E4FAC227577.png',
      '/gshock/79F56FA7-385E-4FEC-AFDF-A1F6DAE6278C.png',
      '/gshock/96213510-3516-4DB1-B311-27C33B60832C.png',
      '/gshock/A7308FC4-B8E5-47A6-8BC0-68B34F028CE6.png'
    ]
  }
];
