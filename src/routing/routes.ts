import Home from "../components/pages/home/home";
import ProductPage from "../components/pages/productPage/productPage";
import CartPage from "../components/pages/cartPage/cartPage";
import CheckoutPage from "../components/pages/checkoutPage/checkoutPage";
import PaymentPage from "../components/pages/paymentPage/paymentPage";
import SignUpPage from "../components/pages/signUpPage/signUpPage";
import LoginPage from "../components/pages/loginPage/loginPage";
import OrderConfirmationPage from "../components/pages/orderConfirmationPage/orderConfirmationPage";
import ErrorPageUrl from "../components/pages/errorPageUrl/errorPageUrl";

export const Routes = [
    {
        component: Home,
        exact: true,
        path: "/"
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
    },
    {
        component: SignUpPage,
        excat: true,
        path: "/signup"
    },
    {
        component: LoginPage,
        excat: true,
        path: "/login"
    },
    {
        component: OrderConfirmationPage,
        exact: true,
        path: "/orderConfirmation"
    },
    // {
    //     component: ErrorPageUrl
    // }
];
