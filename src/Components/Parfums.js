import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ParfumCard from './ParfumCard';
import { useSelector } from 'react-redux';
import AddParfum from './AddParfum';
import EditParfum from './EditParfum';

function Parfums() {
    // const [Parfums, setParfums] = useState([
    //     {
    //         image: "https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/11811330392094/Jimmy-Choo-Eau-de-Parfum-Spray-3386460048125-Flash.jpg",
    //         name: "JIMMY CHOO-Flach",
    //         description: "Eau de Parfum Spray - 60ML",
    //         price: " £29.99   "
    //     },
    //     {
    //         image: "https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/10936364400670/Valentino-Eau-de-Toilette-for-him-3614272761452-Born-In-Roma-Uomo.jpg",
    //         name: "VALENTINO-Born In Roma Uomo",
    //         description: "Eau de Toilette for him-50Ml",
    //         price: " £59.00   "

    //     },
    //     {
    //         image: "https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/10570384146462/Montblanc-Eau-de-Parfum-Spray-3386460101035-Explorer.jpg",
    //         name: "MONTBLANC-Explorer",
    //         description: "Eau de Parfum Spray-100ML",
    //         price: " £69.00 "
    //     },
    //     {
    //         image: "https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/11795806486558/Britney-Spears-Eau-de-Parfum-Spray-719346065405-Fantasy.jpg",
    //         name: "BRITNEY SPEARS-Fantasy",
    //         description: "Eau de Parfum for her-100ML",
    //         price: "  £20.99 "
    //     },
    // ])

    const parfum = useSelector((state) => state.parfum.ParfumsList);
    console.log(parfum);
    return (
        <div>

            <div class="category_header js-mobile__category_header_toggle">
                <h1 class="category_header__title category_title">Offers</h1>
                <span class="icon_arrow-down category_header__icon" style={{ display: "none" }}></span>
            </div>
            <div class="owl-item active" style={{ width: "1349px" }}>
                <a href="/products/shop-all/c/SA2001" class="item Goldspot" data-component-id="rbCampaignStatic7" data-background-desktop="#ffffff " data-background-mobile="#ffffff " data-banner="bcCampaignStatic7" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
                    <picture class="">
                        <source data-srcset="/medias/sys_master/homepage-media/homepage-media/11822965719070/1200x320-Desktop.jpg" media="(min-width: 1024px)" srcset="/medias/sys_master/homepage-media/homepage-media/11822965719070/1200x320-Desktop.jpg" />
                        <source data-srcset="/medias/sys_master/homepage-media/homepage-media/11822965522462/1023x320-Tablet-FFFFFF.jpg" media="(min-width: 768px)" srcset="/medias/sys_master/homepage-media/homepage-media/11822965522462/1023x320-Tablet-FFFFFF.jpg" />
                        <source data-srcset="/medias/sys_master/homepage-media/homepage-media/11822965784606/400x466-Mobile.jpg" media="(min-width: 0px)" srcset="/medias/sys_master/homepage-media/homepage-media/11822965784606/400x466-Mobile.jpg" />
                        <img data-src="" class=" ls-is-cached lazyloaded" alt="" />
                    </picture>
                    <div class="hero_carousel__content" title="">
                    </div>
                </a>
                <div className='Carouseler'>
                    <Carousel >
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ borderRadius: " 8px 8px 8px 8px" }}
                                src="https://www.theperfumeshop.com/medias/sys_master/homepage-media/homepage-media/11822965719070/1200x320-Desktop.jpg" alt="First slide"
                            />
                            {/* <div className="Naa">
          <h3 style={{color: "#ffffff"}}> BOSS</h3>
          <p class="hero_carousel__live_text" style={{color: "#ffffff"}}><span class="sPara">A light and refreshing summer limited edition of BOSS Bottled
        </span> </p>
         <p style={{color: "#ffffff"}}> <b>Exclusive to The Perfume Shop</b></p>
   </div> */}
                            {/* <div class="btn hero_carousel__btn Goldspot_Button sButton" style={{backgroundColor: "#ffffff", color: "", position: "absolute",
    top: "260px",
    left: "140px"}}>SHOP NOW</div> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ borderRadius: " 8px 8px 8px 8px" }}
                                src="https://www.theperfumeshop.com/medias/sys_master/homepage-media/homepage-media/11823351529502/1200x320-Desktop.jpg"
                                alt="Second slide"
                            />
                            <div className="Naa">

                                <h3><b style={{ fontFamily: "fantasy" }}>DEALS OF THE</b> WEEK</h3>

                                <p class="hero_carousel__live_text" style={{ color: " #000000" }} ><span class="sPara">ENDS 9AM 3RD MAY</span>
                                </p>
                                <div class="btn hero_carousel__btn Goldspot_Button sButton" style={{ backgroundColor: "#000000", color: "#ffffff" }}>SHOP NOW</div>
                            </div>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{ borderRadius: " 8px 8px 8px 8px" }}
                                src="https://www.theperfumeshop.com/medias/sys_master/generic-categories-media/generic-categories/11821753499678/1200x320-Desktop.jpg"
                                alt="Third slide"
                            />
                            <div className="Naa">
                                <img class="s sLogo" src="https://theperfumeshop.com/medias/sys_master/root/11820537610270/mugler-logo-large.png" style={{
                                    height: "30px", position: "absolute",
                                    top: "-34px",
                                    left: "37px"
                                }} />
                                <span class="hero_carousel__live_text" style={{ color: "#000000" }}><span class="sPara"> TIMELESS SCENTS </span></span>
                                <p >Discover our range of classic fragrances </p>
                            </div>
                            <div class="btn hero_carousel__btn Goldspot_Button sButton" style={{
                                backgroundColor: "#000000", color: "#ffffff", position: "absolute",
                                top: "260px",
                                left: "140px"
                            }}>SHOP NOW</div>

                        </Carousel.Item>
                    </Carousel>
                </div>



            </div>

            <div id="image-1541975415305" class="ins-element-content ins-story-image" not-sortable="true" data-recommended-image-size="180x180" style={{ backgroundImage: "url(&quot;https://image.useinsider.com/theperfumeshop/defaultImageLibrary/shop-all-offers-1624628493.png&quot;) !important", backgroundColor: "rgb(255, 255, 255) !important, data-background-color-changed:true" }}></div>




            <div className="Parfum" style={{ marginTop: "320px", backgroundColor: "#e9e3e3", height: "1430" }}>
                <div className="f3-00" >
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/11620980817950/Versace-Eau-de-Toilette-Spray-8011003804566-Yellow-Diamond.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/11620980817950/Versace-Eau-de-Toilette-Spray-8011003804566-Yellow-Diamond.jpg" alt="VERSACE Yell" title="Versace-Eau de Toilette Spray-8011003804566-Yellow Diamond" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"><span class="product_tile__tag"></span></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Versace</p>
                        <p class="product_tile__title">Yellow Diamond</p>
                        <p class="product_tile__description">Eau de Toilette Spray - 90ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">     £42.99                    </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £92.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£49.01</span>
                            </span>
                        </p>
                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/10496593788958/Paco-Rabanne-Eau-de-Toilette-for-him-3349666007921-1-Million.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/10496593788958/Paco-Rabanne-Eau-de-Toilette-for-him-3349666007921-1-Million.jpg" alt="Paco Rabanne 1 Million Eau de Toilette for him null" title="Paco Rabanne-Eau de Toilette for him-3349666007921-1 Million" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Paco Rabanne</p>
                        <p class="product_tile__title">1 Million</p>
                        <p class="product_tile__description">Eau de Toilette for him - 100ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                      £65.00                   </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £75.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£10.00</span>
                            </span>
                        </p>
                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/11585484226590/Calvin-Klein-Eau-de-Parfum-Spray-88300139507-Eternity-Moment.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/11585484226590/Calvin-Klein-Eau-de-Parfum-Spray-88300139507-Eternity-Moment.jpg" alt="CALVIN KLEIN Eternity Moment Eau de Parfum Spray null" title="Calvin Klein-Eau de Parfum Spray-88300139507-Eternity Moment" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"><span class="product_tile__tag"></span></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Calvin Klein</p>
                        <p class="product_tile__title">Eternity Moment</p>
                        <p class="product_tile__description">Eau de Parfum Spray - 100ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                      £29.99                    </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £73.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£43.01</span>
                            </span>
                        </p>
                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/11794863751198/Gucci-Eau-de-Toilette-Spray-8005610328768-Rush.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/11794863751198/Gucci-Eau-de-Toilette-Spray-8005610328768-Rush.jpg" alt="GUCCI Rush Eau de Toilette Spray null" title="Gucci-Eau de Toilette Spray-8005610328768-Rush" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Gucci</p>
                        <p class="product_tile__title">Rush</p>
                        <p class="product_tile__description">Eau de Toilette Spray - 50ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                      £42.99                   </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £75.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£32.01</span>
                            </span>
                        </p>
                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/10809368117278/Axis-Eau-de-Toilette-Gift-Set-for-him-3760276945517-Caviar-Premium.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/10809368117278/Axis-Eau-de-Toilette-Gift-Set-for-him-3760276945517-Caviar-Premium.jpg" alt="AXIS Caviar Premium Eau de Toilette Gift Set for him null" title="Axis-Eau de Toilette Gift Set for him-3760276945517-Caviar Premium" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Axis</p>
                        <p class="product_tile__title">Caviar Premium</p>
                        <p class="product_tile__description">Eau de Toilette Gift Set for him - 100ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                     £9.99                   </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £12.99
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£3.00</span>
                            </span>
                        </p>
                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/9411274080286/Gucci-Eau-de-Toilette-Spray-8005610295046-Bamboo.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/9411274080286/Gucci-Eau-de-Toilette-Spray-8005610295046-Bamboo.jpg" alt="Gucci Bamboo Eau de Toilette Spray null" title="Gucci-Eau de Toilette Spray-8005610295046-Bamboo" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Gucci</p>
                        <p class="product_tile__title">Bamboo</p>
                        <p class="product_tile__description">Eau de Toilette Spray - 50ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                       £43.99                    </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £75.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£31.01</span>
                            </span>
                        </p>

                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/11794866176030/Roberto-Cavalli-Eau-de-Parfum-Spray-3607345730738-Roberto-Cavalli.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/11794866176030/Roberto-Cavalli-Eau-de-Parfum-Spray-3607345730738-Roberto-Cavalli.jpg" alt="ROBERTO CAVALLI Roberto Cavalli Eau de Parfum Spray null" title="Roberto Cavalli-Eau de Parfum Spray-3607345730738-Roberto Cavalli" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Roberto Cavalli</p>
                        <p class="product_tile__title">Roberto Cavalli</p>
                        <p class="product_tile__description">Eau de Parfum Spray - 75ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                      £29.99                    </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £41.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£11.01</span>
                            </span>
                        </p>



                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/10811545354270/Calvin-Klein-Eau-de-Toilette-Spray-88300107438-CK-One.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/10811545354270/Calvin-Klein-Eau-de-Toilette-Spray-88300107438-CK-One.jpg" alt="CALVIN KLEIN CK One Eau de Toilette Spray null" title="Calvin Klein-Eau de Toilette Spray-88300107438-CK One" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Calvin Klein</p>
                        <p class="product_tile__title">CK One</p>
                        <p class="product_tile__description">Eau de Toilette Spray - 200ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                      £34.99                    </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £65.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£30.01</span>
                            </span>
                        </p>



                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/11411810254878/Paco-Rabanne-Eau-de-Toilette-Spray-for-Him-3349668582365-Phantom.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/11411810254878/Paco-Rabanne-Eau-de-Toilette-Spray-for-Him-3349668582365-Phantom.jpg" alt="PACO RABANNE Phantom Eau de Toilette Spray for Him null" title="Paco Rabanne-Eau de Toilette Spray for Him-3349668582365-Phantom" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Paco Rabanne</p>
                        <p class="product_tile__title">Phantom</p>
                        <p class="product_tile__description">Eau de Toilette Spray for Him - 50ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                       £49.99                   </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £56.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£6.01</span>
                            </span>
                        </p>



                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/10496476577822/Calvin-Klein-Eau-de-Parfum-Spray-88300162543-Euphoria-For-Women.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/10496476577822/Calvin-Klein-Eau-de-Parfum-Spray-88300162543-Euphoria-For-Women.jpg" alt="CALVIN KLEIN Euphoria For Women Eau de Parfum Spray null" title="Calvin Klein-Eau de Parfum Spray-88300162543-Euphoria For Women" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>Calvin Klein</p>
                        <p class="product_tile__title">Euphoria For Women</p>
                        <p class="product_tile__description">Eau de Parfum Spray - 50ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                     £34.99                   </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £60.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£25.01</span>
                            </span>
                        </p>



                    </div></div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/10497256423454/HUGO-BOSS-Eau-de-Parfum-Spray-737052041285-Boss-Femme.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/10497256423454/HUGO-BOSS-Eau-de-Parfum-Spray-737052041285-Boss-Femme.jpg" alt="HUGO BOSS Boss Femme Eau de Parfum Spray null" title="HUGO BOSS-Eau de Parfum Spray-737052041285-Boss Femme" />
                    </figure>
                    <div class="product_tile__info">
                        <div class="product_tile__tags"></div>


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>HUGO BOSS</p>
                        <p class="product_tile__title">Boss Femme</p>
                        <p class="product_tile__description">Eau de Parfum Spray - 50ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                       £31.99                   </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £57.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£25.01</span>
                            </span>
                        </p>



                    </div> </div>
                <div className="f3-00">
                    <figure class="product_tile__figure">
                        <img class="product_tile__image Product_image lazyloaded" data-src="/medias/sys_master/front-cat/front-cat/11765288861726/DIOR-Eau-de-Toilette-Spray-3348901627368-Miss-Dior-Blooming-Bouquet.jpg" src="https://www.theperfumeshop.com/medias/sys_master/front-cat/front-cat/11765288861726/DIOR-Eau-de-Toilette-Spray-3348901627368-Miss-Dior-Blooming-Bouquet.jpg" alt="DIOR Miss Dior Blooming Bouquet Eau de Toilette Spray null" title="DIOR-Eau de Toilette Spray-3348901627368-Miss Dior Blooming Bouquet" />
                    </figure>
                    <div class="product_tile__info">


                        <p class="product_tile__brand" style={{ fontSize: "20px" }}>DIOR</p>
                        <p class="product_tile__title">Miss Dior Blooming Bouquet</p>
                        <p class="product_tile__description">Eau de Toilette Spray - 50ML</p>
                        <p class="product_tile__price">
                            <span class="product_tile__price_only">                      £78.99                   </span>
                            <span class="product_tile__price_rrp">
                                RRP
                                £86.00
                            </span>
                            <span class="product_tile__price_sale">
                                Save
                                <span class="product_tile__price_text">£7.01</span>
                            </span>
                        </p>



                    </div></div>
                <div class="product_grid__load_more j-load_more" data-page="0">
                    <button class="btn btn-black" aria-label="Load next 36 products" style={{ color: "white" }}>
                        LOAD NEXT 36 PRODUCTS
                    </button></div>
            </div>

            <div className='Name'>
                {parfum?.map((Parfums) => <ParfumCard Parfums={Parfums} />

                )
                }</div>
            <div className='ADD'>
                <AddParfum />

            </div>
        </div>
    )
}

export default Parfums;