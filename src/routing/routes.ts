import Home from "../components/pages/home/home";
import About from "../components/pages/about/about";
import Contact from "../components/pages/contact/contact";
import ProductPage from "../components/pages/productPage/productPage";
import CartPage from "../components/pages/cartPage/cartPage";
import CheckoutPage from "../components/pages/checkoutPage/checkoutPage";
import PaymentPage from "../components/pages/paymentPage/paymentPage";

export const Routes = [
    {
        component: Home,
        exact: true,
        path: "/"
    },
    {
        component: About,
        exact: true,
        path: "/about"
    },
    {
        component: Contact,
        exact: true,
        path: "/contact"
    },
    {
        component: ProductPage,
        exact: true,
        path: "/product/:id"
    },
    {
        component: CartPage,
        exact: true,
        path: "/cart"
    },
    {
        component: CheckoutPage,
        exact: true,
        path: "/checkout"
    },
    {
        component: PaymentPage,
        exact: true,
        path: "/payment"
    }
];
