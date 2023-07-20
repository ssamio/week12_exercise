import React, { Suspense } from 'react';
import { AppBar, Toolbar, Button, Box} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) =>{
        i18n.changeLanguage(lang);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Button component={Link} to="/" color="inherit">
                    {t('Home')}
                </Button>
                <Button component={Link} to="/about" color="inherit">
                    {t('About')}
                </Button>
            </Toolbar>
        <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Button id="en" onClick={()=> changeLanguage("en")} color="inherit">EN</Button> 
            <Button id="fi" onClick={()=> changeLanguage("fi")} color="inherit">FI</Button>
        </Toolbar>
        </AppBar>
    )
}

export default function App(){
    return (
        <Suspense fallback="loading">
            <Header />
        </Suspense>
    )
}