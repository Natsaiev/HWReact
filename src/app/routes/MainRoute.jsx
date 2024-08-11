import {Routes, Route} from 'react-router-dom';
import {Home, About, Profile } from '../Components';



export const MainRoute = () => <Routes>
<Route path="/" element={<Home />} />

<Route path="/about" element={<About />} />

<Route path= "/profile/:module/:userId" element= {<Profile/>}/>
</Routes>
