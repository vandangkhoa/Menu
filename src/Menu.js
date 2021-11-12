import React from "react";

const Menu = ({ items }) => {
    return ( <
        div className = "section-center" > {
            items.map((item) => {
                const { id, name, imgUrl, desc, pricePU } = item;
                return ( <
                    article key = { id }
                    className = "menu-item" >
                    <
                    img src = { imgUrl }
                    alt = { name }
                    className = "photo" / >
                    <
                    div className = "item-info" >
                    <
                    header >
                    <
                    h4 > { name } < /h4> <
                    h4 className = "price" > $ { pricePU } < /h4> < /
                    header > <
                    p className = "item-text" > { desc } < /p> <
                    button className = "cart" > Add to cart < /button> < /
                    div >


                    <
                    /article>
                );
            })
        } <
        /div>
    );
};

export default Menu;

/*</button><
        main >

        <
        section className = "menu section" >
        <
        div className = "title" >
        <
        img src = { logo }
        alt = "logo"
        className = "logo" / >
        <
        h2 > Menu List < /h2> <
        div className = "underline" > < /div> < /
        div > <
        Categories categories = { categories }
        activeCategory = { activeCategory }
        filterItems = { filterItems }
        /> <
        Menu items = { menuItems }
        /> < /
        section > <
        /main></div></h2></div></section></main></p></h4><