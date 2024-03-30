import './App.css'
import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Home = lazy(() => import('./Screens/Home'))
const OrderHistory = lazy(() => import('./Screens/OrderHistory'))
const Orders = lazy(() => import('./Screens/Orders'))
const Help = lazy(() => import('./Screens/Help'))
import Revenue from './Screens/Revenue'
import { createPortal } from 'react-dom'
import Overlay from './Components/Overlay'
const Rider = lazy(() => import('./Screens/Rider'))
import HelpForm from './Components/HelpForm'
import Representator from './Components/Representator'
const Menu = lazy(() => import('./Screens/Menu'))
const AddMenu = lazy(() => import('./Screens/AddMenu'))
import AddRevenue from './Components/AddRevenue'
const Login = lazy(() => import('./Screens/Login'))
const Signup = lazy(() => import('./Screens/Signup'))
import { useAuth } from './Context/AuthContext.jsx'
import ProtectedRoute from './Components/ProtectedRoute'
import { Toaster } from 'react-hot-toast'
import Loader from './Components/Loader'
import Navbar from './Components/Navbar.jsx'
const OTP = lazy(() => import('./Screens/OTP'))
const RegRestaurant = lazy(() => import('./Screens/RegRestaurant'))
const Chat = lazy(() => import('./Screens/Chat'))
const Notification = lazy(() => import('./Screens/Notification'))
import messages_en from './language/en.json';
import messages_de from './language/de.json';
import { IntlProvider } from 'react-intl';

const messages = {
    en: messages_en,
    de: messages_de,
};

function App() {
    const [overlay, setOverlay] = useState(false)

    const [showRepresentator, setShowRepresentator] = useState(false)
    const [showRevenueForm, setShowRevenueForm] = useState(false)

    const { loading } = useAuth()

    const toggleRepresentator = () => {
        setShowRepresentator(!showRepresentator)
        setOverlay(!overlay)
    }

    const toggleRevenueForm = () => {
        setShowRevenueForm(!showRevenueForm)
        setOverlay(!overlay)
    }
    const [locale, setLocale] = useState('en');

    const changeLocale = (newLocale) => {
        setLocale(newLocale);
    };

    return (
        <>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <Toaster />
                {loading && <Loader />}
                <BrowserRouter>
                    <Suspense fallback={<Loader />}>
                        <Navbar locale={locale} changeLocale={changeLocale}/>
                        <Routes>
                            <Route element={<ProtectedRoute />}>
                                <Route key='home' element={<Home />} path='/' />
                                <Route
                                    key='order-history'
                                    element={<OrderHistory />}
                                    path='/order-history'
                                />
                                <Route
                                    key='orders'
                                    element={<Orders />}
                                    path='/orders'
                                />
                                <Route
                                    key={'RegRestaurant'}
                                    element={<RegRestaurant />}
                                    path='register-restaurant'
                                />
                                <Route
                                    key='help'
                                    element={
                                        <Help
                                            toggleRepresentator={
                                                toggleRepresentator
                                            }
                                        />
                                    }
                                    path='/help'
                                />
                                <Route
                                    key='revenue'
                                    element={
                                        <Revenue
                                            toggleRevenueForm={toggleRevenueForm}
                                        />
                                    }
                                    path='/revenue'
                                />
                                <Route
                                    key='riders'
                                    element={<Rider />}
                                    path='/riders'
                                />
                                <Route
                                    key='help-form'
                                    element={<HelpForm />}
                                    path='/help-form'
                                />
                                <Route
                                    key='menu'
                                    element={<Menu />}
                                    path='/menu/*'
                                />
                                <Route
                                    key='add-menu'
                                    element={<AddMenu />}
                                    path='/add-menu'
                                />
                                <Route key='chat' element={<Chat />} path='/chat' />
                                <Route
                                    key='notification'
                                    element={<Notification />}
                                    path='/notification'
                                />
                            </Route>
                            <Route element={<Login />} path='/account/login' />
                            <Route element={<Signup />} path='/account/signup' />
                            <Route element={<OTP />} path='/account/verification' />
                        </Routes>
                    </Suspense>
                </BrowserRouter>

                {showRepresentator && (
                    <>
                        {createPortal(
                            <Representator />,
                            document.getElementById('modal'),
                        )}
                        <Overlay toggleOverlay={toggleRepresentator} />
                    </>
                )}

                {showRevenueForm && (
                    <>
                        {createPortal(
                            <AddRevenue />,
                            document.getElementById('modal'),
                        )}
                        <Overlay toggleOverlay={toggleRevenueForm} />
                    </>
                )}
            </IntlProvider>
        </>
    )
}

export default App
