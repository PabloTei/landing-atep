export const IMAGES = {
  assistance:
    "https://res.cloudinary.com/depifliz3/image/upload/v1706641232/ATEP-CONSULTING/scott-graham-5fNmWej4tAA-unsplash_utll5j.jpg",
  trust:
    "https://res.cloudinary.com/depifliz3/image/upload/v1730067833/ATEP-CONSULTING/krakenimages-Y5bvRlcCx8k-unsplash_piqndb.jpg",
  excellence:
    "https://res.cloudinary.com/depifliz3/image/upload/v1730067833/ATEP-CONSULTING/brad-neathery-nPy0X4xew60-unsplash_omr8ha.jpg",
  professionality:
    "https://res.cloudinary.com/depifliz3/image/upload/v1730067833/ATEP-CONSULTING/john-schnobrich-FlPc9_VocJ4-unsplash_ivtvah.jpg",
};

export const BRAND_LOGO = {
  vtx: "https://res.cloudinary.com/depifliz3/image/upload/v1730240021/vertilux-logo-bd2f4e28cbfd73c603892427c982be3ed2931322580477ea84044aacdafad53b_xxhgte.png",
  style:
    "https://res.cloudinary.com/depifliz3/image/upload/v1706639485/ATEP-CONSULTING/style-main-logo_nkl84q.png",
  hampton:
    "https://res.cloudinary.com/depifliz3/image/upload/v1706399812/ATEP-CONSULTING/hampton-logo_f1d3lj.svg",
};

export const BRAND_LOGOS_ARRAY = Object.entries(BRAND_LOGO).map(
  ([name, url]) => ({
    name,
    url,
  })
);
