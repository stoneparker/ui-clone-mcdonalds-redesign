import React from 'react';

import Cheese from '../assets/cheese.svg';
import Tomato from '../assets/tomato.svg';
import Pickles from '../assets/pickles.svg';
import Chili from '../assets/chili.svg';
import Garlic from '../assets/garlic.svg';
import Bread from '../assets/bread.svg';

const products = [
    {
        product_id: 1,
        product_name: 'Triple Cheeseburger',
        product_price: 5.35,
        product_img: 'https://mcdonalds.co.nz/sites/mcdonalds.co.nz/files/Triple%20Cheeseburger%20700x487.png',
        ingredients: [
            {
                ingredient_id: 1,
                ingredient_img: <Cheese fill="#FF7C10" width={27} height={27} />,
            },

            {
                ingredient_id: 2,
                ingredient_img: <Tomato fill="#FF7C10" width={27} height={27} />,
            },
            
            {
                ingredient_id: 3,
                ingredient_img: <Pickles fill="#FF7C10" width={27} height={27} />,
            },

            {
                ingredient_id: 4,
                ingredient_img: <Chili fill="#FF7C10" width={27} height={27} />,
            },

            {
                ingredient_id: 5,
                ingredient_img: <Garlic fill="#FF7C10" width={27} height={27} />,
            },
        ],

        breads: [
            {
                bread_id: 1,
                bread_img: <Bread fill="#FFC809" width={27} height={27} />,
            },

            {
                bread_id: 2,
                bread_img: <Bread fill="#A98668" width={27} height={27} />,
            },

            {
                bread_id: 3,
                bread_img: <Bread fill="#312D24" width={27} height={27} />,
            },
        ]
    },

    {
        product_id: 2,
        product_name: 'Quarter Pounder',
        product_price: 4.50,
        product_img: 'https://mcdonalds.co.nz/sites/mcdonalds.co.nz/files/QuarterPounder_BB_Low_XXXX_2019_SMP%20700x487.png'
    },
    
    {
        product_id: 3,
        product_name: "Double Chick'n McCheese",
        product_price: 3.20,
        product_img: 'https://mcdonalds.co.nz/sites/mcdonalds.co.nz/files/DoubleChickenMcCheese_700x487.png'
    },
    
    {
        product_id: 4,
        product_name: 'Almighty Texan BBQ',
        product_price: 7.80,
        product_img: 'https://mcdonalds.co.nz/sites/mcdonalds.co.nz/files/Texan_BBQ_Bacon_700x487.png'
    },
    
    {
        product_id: 5,
        product_name: 'Double Filet-o-Fish',
        product_price: 5.80,
        product_img: 'https://mcdonalds.co.nz/sites/mcdonalds.co.nz/files/Double%20FilletOFish%20700x487_0.png'
    },

    {
        product_id: 5,
        product_name: 'Kiwiburger Beef',
        product_price: 7.90,
        product_img: 'https://mcdonalds.co.nz/sites/mcdonalds.co.nz/files/Beef%20Burger%20700x487%20Hero.png'
    },
    
    {
        product_id: 5,
        product_name: 'Big Mac',
        product_price: 6.40,
        product_img: 'https://mcdonalds.co.nz/sites/mcdonalds.co.nz/files/BigMac_BB_Low_XXXX_2019_SMP%20700x487.png'
    },
]

export default products;