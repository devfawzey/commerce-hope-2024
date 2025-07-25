import type {BadgeState, Category, FooterLink, HeaderAction, HeaderLink, Order, Product, ProfileLink, SemiCard, ServiceCard} from "~/types";
import jsonProducts from "./products"

export const FAKE_API_URL = "https://fakestoreapi.com/products";
export const BASE_API_URL = "http://localhost:8081/api/v1/"
export const API_AUTH_URL = "https://dummyjson.com/auth";
export const MAX_ITEMS = 5
export const DISCOUNT = 40
export const SHIPPING_TAX = 8
export const API_COUNTRIES_URL = "https://restcountries.com/v3.1/independent?status=true&fields=name"
export const DELAY_TIME = 4000
export const MAX_SEARCH_RESULT = 5
export const PAYMENT_METHODS: Order['paymentMethod'][] = ['cash_on_delivery', "credit_card", "paypal"]
export const T_PAYMENT_METHOD: Order['paymentMethod'] = 'cash_on_delivery'
export const REGEX = {
  phoneNumber: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  zipCode: /^\d{5,9}$/
}

export const HEADER_ACTIONS: HeaderAction[] = [
  {
    label: "home",
    to: "/",
    icon: "iconamoon:home-thin",
    mobile: true,
  }
  ,
  {
    label: "search",
    icon: "material-symbols-light:search",
    to: "/search",
    isPopover: true
  },
  {
    label: "products",
    icon: "my-icon:products", mobile: true, to: "/products",
  },
  {
    label: "cart",
    icon: "my-icon:cart",
    hasChip: true,
    color: "blue", to: "/cart",
  },
  {
    label: "user",
    icon: "material-symbols-light:person-outline",
    to: "/profile",
    isMenu: true

  }
]

export const HEADER_LINKS: HeaderLink[] = [
  {label: "home", to: "/",},
  {label: "products", to: '/products',},
  {label: "men", to: "/products", category: "men's clothing"},
  {label: "women", to: "/products", category: "women's clothing"},
  {label: "electronics", to: "/products", category: "electronics"}
]

export const ProfileLinks: ProfileLink[] = [
  {
    icon: "i-circum-dark",
    label: "theme mode",
    hasSwitch: true,
  },
  {
    icon: "lets-icons:home-light",
    label: 'home',
    path: "/"
  },
  {
    icon: "iconamoon:invoice-thin",
    label: "orders",
    path: "/profile/orders"
  },
  {
    icon: "material-symbols-light:person-outline-rounded",
    label: "profile",
    path: "/profile/general"
  },
]

export const HomeItems = {
  landing: {
    firstSection: <SemiCard>{
      label: "top products of the year!",
      description: "It is a long established fact that a reader will be distracted by the readable.",
      img: "slide-1",
      btns: [
        {
          label: 'shop now', path: '/products'
        },
        {
          label: "see all", path: '/products'
        }
      ]
    },
    secondSection: <SemiCard[]>[
      {
        name: "men",
        label: "Men Latest Fashion",
        subTitle: "<span>25%</span> Off on first order",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        img: "men",
        btns: [
          {
            label: "shop now",
            path: "/products?category=men"
          }
        ]
      },
      {
        name: 'women',
        label: "Women Latest Fashion",
        subTitle: "<span>25%</span> Off on first order",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        img: "women",
        btns: [
          {
            label: "shop now",
            path: "/products?category=women",
          }
        ]
      },
    ],
    brandSection: <SemiCard>{
      img: "brand",
      label: "UK Premier Store for Wrist Watches",
      description: "Welcome to our world of horological excellence, featuring timeless, elegant watches from renowned luxury brands worldwide.",
      btns: [
        {
          label: "view more",
          path: "/products"
        }
      ]
    }
  }
}

export const Categories: Category[] = [
  {
    label: "electronics",
    radioTitle: "electronics"
  },
  {
    label: "jewelery",
    radioTitle: "jewelery"
  },
  {
    label: "men's clothing",
    radioTitle: "men",
  },
  {
    label: "women's clothing",
    radioTitle: "women",
  },
]

export const Products: Product[] = jsonProducts

export const Services: ServiceCard[] = [
  {
    icon: "la:shipping-fast",
    label: "free shipping",
    subtitle: "Enjoy free shipping on all orders, providing a convenient and cost-effective way to receive your favorite products at your doorstep."
  },
  {
    icon: "material-symbols-light:support-agent",
    label: "support",
    subtitle: "Our dedicated support team is here to assist you. Reach out to us for any queries or concerns, and experience exceptional customer service."
  },
  {
    icon: "fluent-mdl2:repeat-all",
    label: "Return",
    subtitle: "Hassle-free returns within a specified period. If you're not satisfied with your purchase, we make the return process simple and convenient for you."
  },
  {
    icon: "bx:dollar",
    label: "Payment",
    subtitle: "Secure and convenient payment options for a seamless shopping experience. Choose from various payment methods to complete your order."
  },
]

export const FooterLinks: FooterLink[] = [
  {
    icon: "mdi-facebook",
    color: '#1877f2'
  },
  {
    icon: "mdi-instagram",
    color: '#c32aa3'
  },
  {
    icon: "mdi-linkedin",
    color: '#0a66c2'
  },
  {
    icon: "mdi-youtube",
    color: '#ff0000'
  },
]

export const STATE_BADGES: BadgeState = {
  pending: "primary",
  canceled: "red",
  confirmed: "lime",
  delivered: "green",
  shippd: "purple"
}

export enum ProductCategory {
  Electronics = "electronics",
  Clothing    = "clothing",
  Books       = "books",
}

export enum ProductSizes {
  S = "S",
  M = "M",
  L = "L",
}