import MenuItem from "./MenuItem";

const Nav = () => {
    // temprory data
    const categorytmp = [
        {
            "id": 1,
            "title": "Category",
            "route": "category/All",
            "icon": {
                "path": "M4 6h16M4 12h16M4 18h16"
            },
            "subMenu": [
                {
                    "id": 1,
                    "title": "Electronics",
                    "path": "category/electronics/",
                    "subMenu": [
                        {
                            "id": 1,
                            "title": "mobile's",
                            "path": "category/mobiles/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs/"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng/"
                                },
                            ]
                        },
                        {
                            "id": 2,
                            "title": "laptop's",
                            "path": "category/lapt/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Asus",
                                    "path": "category/asus/"
                                },
                                {
                                    "id": 2,
                                    "title": "Acer",
                                    "path": "category/acr/"
                                },
                            ]
                        }, {
                            "id": 3,
                            "title": "pc's",
                            "path": "category/pc/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng"
                                },
                            ]
                        },
                    ],
                },
                {
                    "id": 2,
                    "title": "Jewelery",
                    "path": "category/jewelery/",
                    "subMenu": [
                        {
                            "id": 1,
                            "title": "mobile's",
                            "path": "category/mobiles/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs/"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng/"
                                },
                            ]
                        },
                        {
                            "id": 2,
                            "title": "laptop's",
                            "path": "category/lapt/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Asus",
                                    "path": "category/asus/"
                                },
                                {
                                    "id": 2,
                                    "title": "Acer",
                                    "path": "category/acr/"
                                },
                            ]
                        }, {
                            "id": 3,
                            "title": "pc's",
                            "path": "category/pc/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng"
                                },
                            ]
                        },
                    ],
                },
                {
                    "id": 3,
                    "title": "Men's clothing",
                    "path": "category/men's clothing/",
                    "subMenu": [
                        {
                            "id": 1,
                            "title": "mobile's",
                            "path": "category/mobiles/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs/"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng/"
                                },
                            ]
                        },
                        {
                            "id": 2,
                            "title": "laptop's",
                            "path": "category/lapt/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Asus",
                                    "path": "category/asus/"
                                },
                                {
                                    "id": 2,
                                    "title": "Acer",
                                    "path": "category/acr/"
                                },
                            ]
                        }, {
                            "id": 3,
                            "title": "pc's",
                            "path": "category/pc/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng"
                                },
                            ]
                        },
                    ],
                },
                {
                    "id": 4,
                    "title": "Women's clothing",
                    "path": "category/women's clothing/",
                    "subMenu": [
                        {
                            "id": 1,
                            "title": "mobile's",
                            "path": "category/mobiles/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs/"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng/"
                                },
                            ]
                        },
                        {
                            "id": 2,
                            "title": "laptop's",
                            "path": "category/lapt/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Asus",
                                    "path": "category/asus/"
                                },
                                {
                                    "id": 2,
                                    "title": "Acer",
                                    "path": "category/acr/"
                                },
                            ]
                        },
                        {
                            "id": 3,
                            "title": "pc's",
                            "path": "category/pc/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng"
                                },
                            ]
                        },
                        {
                            "id": 4,
                            "title": "pc's",
                            "path": "category/pc/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng"
                                },
                            ]
                        }, {
                            "id": 5,
                            "title": "pc's",
                            "path": "category/pc/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng"
                                },
                            ]
                        }, {
                            "id": 6,
                            "title": "pc's",
                            "path": "category/pc/",
                            "subMenu": [
                                {
                                    "id": 1,
                                    "title": "Hawie",
                                    "path": "category/hwvs"
                                },
                                {
                                    "id": 2,
                                    "title": "Samsung",
                                    "path": "category/smsng"
                                },
                            ]
                        },
                    ],

                },

            ]
        },
        {
            "id": 2,
            "title": "Market",
            "route": "/cat"
        },
        {
            "id": 3,
            "title": "Discount's",
            "route": "/cat"
        },
        {
            "id": 4,
            "title": "Suggestion's",
            "route": "/cat"
        },
        {
            "id": 5,
            "title": "Q&A",
            "route": "/cat"
        }
    ];


    return (
        <section>
            <nav className='mx-10 my-4 lg:my-0'>
                <ul className='flex justify-center lg:justify-start text-gray-600 text-center '>
                    {categorytmp.map(item => (
                        <MenuItem item={item} key={item.id}/>
                    ))}
                </ul>
            </nav>
        </section>
    );
}

export default Nav;