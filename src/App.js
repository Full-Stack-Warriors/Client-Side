import React from 'react';
import { Route, Switch } from 'react-router';
import Footer from './Components/Footer/Footer';
import NavigationBar from './Components/NavBar/NavigationBar';
import About from './Pages/About/About';
import { ProfileProvider } from './Pages/Account/Context.Provider';
import Logout from './Pages/Account/Logout';
import SignIn from './Pages/Account/SignIn';
import SignUp from './Pages/Account/SignUp';
import Contact from './Pages/Contact/Contact';
import Diseases from './Pages/Diseases/Diseases';
import Errore from './Pages/Errore/Errore';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import SymtomsChecker from './Pages/checker/index.js';
import Chat from './SubPages/Chat/Chat';
import Disease from './SubPages/Disease/Disease';
import HomePage from './SymtomChaker/components/HomePage';
 

function App() {
  return (
    <ProfileProvider>
      <Switch>
          <Route exact path="/">
                <NavigationBar path="/"/>
                <Home/>
                <Footer/>
          </Route>
          <Route exact path="/about">
                <NavigationBar path="/about"/>
                <About/>
                <Footer/>
          </Route>
          <Route exact path="/symptomschecker">
                <NavigationBar path="/symptomschecker"/>
                <SymtomsChecker/>
                <Footer/>
          </Route>
          <Route exact path="/symptomschecker/prediction">
                <NavigationBar path="/symptomschecker"/>
                <HomePage/>
                <Footer/>
          </Route>
          <Route exact path="/diseases">
                <NavigationBar path="/diseases"/>
                <Diseases/>
                <Footer/>
          </Route>
          <Route exact path="/contact">
                <NavigationBar path="/contact"/>
                <Contact/>
                <Footer/>
          </Route>
          <Route exact path="/signup">
                <NavigationBar path="/signup"/>
                <SignUp/>
                <Footer/>
          </Route>
          <Route exact path="/login">
                <NavigationBar path="/login"/>
                <SignIn/>
                <Footer/>
          </Route>
          <Route exact path="/disease/:id">
                <NavigationBar/>
                <Disease/>
                <Footer/>
          </Route>
          <Route exact path="/chat">
                <NavigationBar/>
                <Chat/>
          </Route>
          <Route exact path="/profile">
                <NavigationBar path="/profile"/>
                <Profile/>
                <Footer/>
          </Route>
          <Route exact path="/logout">
                  <Logout/>
          </Route>
          <Route>
              <Errore/>
          </Route>
      </Switch>
    </ProfileProvider>
  );
}

export default App;
