import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import MyHOC from './MyHOC';
import Test from './Test';


const MyContainer = () => {
const {t, i18n } = useTranslation();
const Wrap = MyHOC(Test, {name: "Kalle"});
    return (
        <div>
            <Wrap></Wrap>
            <p>{t('Home page')}</p>
        </div>
    )
}

export default function App(){
    return (
        <Suspense fallback="loading">
            <MyContainer />
        </Suspense>
    )
}