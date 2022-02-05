import MenuItem from "./MenuItem";

const Nav = () => {
    // temprory data
    const categorytmp = [
        {
            "id":1,
            "title":"Category",
            "route":"cat/",
            "icon":{
                "path":"M4 6h16M4 12h16M4 18h16"
            },
            "subMenu":[
                {
                    "id":1,
                    "title":"Electronics",
                    "path":"electronics/",
                    "subMenu":[
                        {
                            "id":1,
                            "title":"mobile's",
                            "path":"mobiles/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs/"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng/"
                                },
                            ]
                        },
                                        {
                            "id":2,
                            "title":"laptop's",
                            "path":"lapt/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Asus",
                                    "path" :"asus/"
                                },
                                {
                                    "id":2,
                                    "title" : "Acer",
                                    "path" :"acr/"
                                },
                            ]
                        },                {
                            "id":3,
                            "title":"pc's",
                            "path":"pc/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng"
                                },
                            ]
                        },
                    ],
                },
                {
                    "id":2,
                    "title":"Clothing",
                    "path":"clth/",
                    "subMenu":[
                        {
                            "id":1,
                            "title":"mobile's",
                            "path":"mobiles/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs/"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng/"
                                },
                            ]
                        },
                                        {
                            "id":2,
                            "title":"laptop's",
                            "path":"lapt/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Asus",
                                    "path" :"asus/"
                                },
                                {
                                    "id":2,
                                    "title" : "Acer",
                                    "path" :"acr/"
                                },
                            ]
                        },                {
                            "id":3,
                            "title":"pc's",
                            "path":"pc/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng"
                                },
                            ]
                        },
                    ],
                },
                {
                    "id":3,
                    "title":"Toys",
                    "path":"clth/",
                    "subMenu":[
                        {
                            "id":1,
                            "title":"mobile's",
                            "path":"mobiles/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs/"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng/"
                                },
                            ]
                        },
                                        {
                            "id":2,
                            "title":"laptop's",
                            "path":"lapt/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Asus",
                                    "path" :"asus/"
                                },
                                {
                                    "id":2,
                                    "title" : "Acer",
                                    "path" :"acr/"
                                },
                            ]
                        },                {
                            "id":3,
                            "title":"pc's",
                            "path":"pc/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng"
                                },
                            ]
                        },
                    ],
                },
                {
                    "id":4,
                    "title":"Food & Beverages",
                    "path":"clth/",
                    "subMenu":[
                        {
                            "id":1,
                            "title":"mobile's",
                            "path":"mobiles/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs/"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng/"
                                },
                            ]
                        },
                         {
                            "id":2,
                            "title":"laptop's",
                            "path":"lapt/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Asus",
                                    "path" :"asus/"
                                },
                                {
                                    "id":2,
                                    "title" : "Acer",
                                    "path" :"acr/"
                                },
                            ]
                        },                
                        {
                            "id":3,
                            "title":"pc's",
                            "path":"pc/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng"
                                },
                            ]
                        },
                            {
                            "id":4,
                            "title":"pc's",
                            "path":"pc/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng"
                                },
                            ]
                        },    {
                            "id":5,
                            "title":"pc's",
                            "path":"pc/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng"
                                },
                            ]
                        },    {
                            "id":6,
                            "title":"pc's",
                            "path":"pc/",
                            "subMenu":[
                                {
                                    "id":1,
                                    "title" : "Hawie",
                                    "path" :"hwvs"
                                },
                                {
                                    "id":2,
                                    "title" : "Samsung",
                                    "path" :"smsng"
                                },
                            ]
                        },
                    ],

                },
                
            ]
        },
        {
            "id":2,
            "title":"Market",
            "route":"/cat"
        },
        {
            "id":3,
            "title":"Discount's",
            "route":"/cat"
        },
        {
            "id":4,
            "title":"Suggestion's",
            "route":"/cat"
        },
        {
            "id":5,
            "title":"Q&A",
            "route":"/cat"
        }
    ];

    
    return (
         <section>
                <nav className='mx-10 my-4 lg:my-0'>
                    <ul className='flex justify-center lg:justify-start text-gray-600 text-center '>
                        {categorytmp.map(item=>(
                            <MenuItem item={item} key={item.id} />
                        ))}
                    </ul>
                </nav>
            </section>
      );
}
 
export default Nav;