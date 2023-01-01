import {dashicon,seticon,credicon,donicon,reqicon,lendicon, boricon} from '../assets/dashicons'



export const sidebarLinks=[
    {
        name:'Dashboard',
        link:'/dashboard',
        svg: 'fa-solid fa-house'    
      
        
    },
    {
        name:'Explore Items',
        link:'/explore',
        svg: 'fa-solid fa-parachute-box'    
      
        
    },
    {
        name:'Lend Your Items',
        link:'/lend/add',
        svg: 'fa-solid fa-rectangle-list'
      
    },
    {
        name:'Transactions',
        link:'/transactions',
        svg: 'fa-solid fa-box-open'
      
        
    },
    {
        name:'Donations',
        link:'/donations',
        svg: 'fa-solid fa-hand-holding-heart'
      
      
        
    },
    {
        name:'Credits',
        link:'/credits',
        svg: 'fa-solid fa-meteor'
      
      
      
        
    },
   
    {
        name:'Requests',
        link:'/requests',
        svg: 'fa-solid fa-user-group'
        
    },
    

];


export const dummyBarChartData=[
    {
        id:1,
        'transaction':'lending',
        credits:150
    },
    {
        id:2,
        'transaction':'borrowing',
        credits:50
    },
   
];


export const borrowItems=[
    {
        title: 'bagpack',
        image: 'https://img.icons8.com/external-wanicon-solid-wanicon/64/null/external-bag-kindergarten-wanicon-solid-wanicon.png',
        credits:'40',
        discription:'useful for keeping items',
        email:'abx@as.com',
        id:1
    },
    {
        title: 'barack obama',
        image: "https://img.icons8.com/bubbles/50/null/barack-obama.png",
        credits:'20',
        discription:' American Ex-president',
        email:'abx@ac.com',
        id: 2

    },
    {
        title: 'Bat',
        image: 'https://img.icons8.com/ios/50/null/cricket.png',
        credits:'80',
        discription:' No words needed ',
        email:'ax@asd.com',
        id: 3
    },
];


export const dummyTrxn=[
    {
        date: '29/02/2022',
        time: '15:05:05',
        borrow:true,
        title:' bagpack',
        price:'100',
        duration:'4',
        credits: '-1',
        image: 'https://img.icons8.com/external-wanicon-solid-wanicon/64/null/external-bag-kindergarten-wanicon-solid-wanicon.png',
        person: 'Harry'
        
    },
    {
        date: '14/04/2022',
        time: '15:05:05',
        borrow:false,
        title:' shoes',
        price:'1000',
        duration:'5',
        credits: '+5',
        image: 'https://img.icons8.com/parakeet/48/null/trainers.png',
        person: 'Harry'
    },
    {
        date: '14/04/2022',
        time: '15:05:05',
        borrow:false,
        title:' shoes',
        price:'1000',
        duration:'5',
        credits: '+5',
        image: 'https://img.icons8.com/parakeet/48/null/trainers.png',
        person: 'Harry3'
        
    },
    {
        date: '14/04/2022',
        time: '15:05:05',
        borrow:false,
        title:' shoes',
        price:'1000',
        duration:'5',
        credits: '+5',
        image: 'https://img.icons8.com/parakeet/48/null/trainers.png',
        person: 'Harry2'
        
    },
];